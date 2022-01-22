<template>
  <table class="table-auto w-full" v-show="assetList.length !== 0">
    <thead>
      <tr>
        <head-item
          :direction="sortDirection"
          title="Asset Type"
          :isCol="sortCol === '1'"
          @click="sort('1')"
        />
        <head-item
          :direction="sortDirection"
          title="Location"
          :isCol="sortCol === '2'"
          @click="sort('2')"
        />
        <head-item
          :direction="sortDirection"
          title="CO<sup>2</sup>e produced per year"
          :isCol="sortCol === '3'"
          @click="sort('3')"
        />
        <head-item
          :direction="sortDirection"
          title="End of Life"
          :isCol="sortCol === '4'"
          @click="sort('4')"
        />
        <head-item
          :direction="sortDirection"
          title="Status"
          :isCol="sortCol === '5'"
          @click="sort('5')"
        />
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="asset in assetList.filter(onlyRecent)"
        :key="asset"
        class="border-b text-center"
      >
        <td class="font-medium">
          <p class="text-base">{{ asset.name }}</p>
          <p class="text-sm text-gray-500">{{ asset.description }}</p>
        </td>
        <td class="font-medium">
          <p class="text-base">{{ asset.location }}</p>
        </td>
        <td class="font-medium">
          <p class="text-base">{{ asset.co2 }}kg</p>
        </td>
        <td class="font-medium">
          <p class="text-base">
            {{ new Date(asset.eol).toLocaleDateString() }}
          </p>
          <p class="text-sm text-gray-500">
            Added on: {{ new Date(asset.createdAt).toLocaleDateString() }}
          </p>
        </td>
        <td>
          <p class="mb-1 text-sm font-medium">
            {{ findLargestUntil(asset.eol) }}
          </p>
          <div class="relative h-1 w-auto bg-indigo-50 rounded-full">
            <div
              class="absolute top-0 left-0 h-full w-1/2 bg-red-500 rounded-full"
              :style="`width: ${dateProgressValue(asset)}%`"
            ></div>
          </div>
        </td>
        <td class="font-medium items-center">
          <button
            class="block w-1/2 ml-10 py-3 text-center text-xs text-white font-bold leading-none bg-green-main hover:bg-green-highlight rounded"
            @click="$router.push(`/assets/proposals/${asset.id}`)"
          >
            <font-awesome-icon
              icon="cloud"
              class="h-4 w-6 my-auto text-white"
            />
            Proposals
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    class="py-4 text-center"
    v-show="assetList.filter(onlyRecent).length === 0 || loading"
  >
    <font-awesome-icon
      icon="fan"
      class="text-green-main h-16 w-16 animate-spin"
      v-show="loading"
    />
    <p
      class="inline-flex items-center text-sm text-green-main font-medium"
      v-show="!loading"
    >
      <font-awesome-icon icon="thermometer-empty" class="w-5 h-5 mr-1" />
      <span>It seems you have no assets that are nearing their EOL.</span>
    </p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HeadItem from "./HeadItem.vue";

export default defineComponent({
  components: {
    HeadItem,
  },
  props: {
    assetList: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    sort(number) {
      if (this.sortCol === number) {
        this.sortDirection = this.sortDirection === "up" ? "down" : "up";
      } else {
        this.sortDirection = "up";
        this.sortCol = number;
      }
    },
    onlyRecent(value) {
      // Check if the asset EOL is within past 3 months
      return value.eol - 7889400000 < Date.now() && value.eol > Date.now();
    },
    dateProgressValue(asset) {
      const mid = Date.now() - asset.createdAt;
      const end = asset.eol - asset.createdAt;
      const percent = mid / end;
      if (percent > 1) {
        return 100;
      } else {
        return percent * 100;
      }
    },
    findLargestUntil(eol) {
      let diff = eol - Date.now();
      let afterText = "until EOL";
      if (diff < 0) {
        diff = -diff;
        afterText = "after EOL";
      }
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      if (days === 0) {
        return `>1 day ${afterText}`;
      } else if (days === 1) {
        return `${days} day ${afterText}`;
      }
      const weeks = Math.floor(days / 7);
      if (weeks === 0) {
        return `${days} days ${afterText}`;
      } else if (weeks === 1) {
        return `${weeks} week ${afterText}`;
      }
      const months = Math.floor(days / 30);
      if (months === 0) {
        return `${weeks} weeks ${afterText}`;
      } else if (months === 1) {
        return `${months} month ${afterText}`;
      } else {
        return `${months} months ${afterText}`;
      }
    },
  },
  data: () => ({
    sortCol: "4",
    sortDirection: "up",
  }),
});
</script>
