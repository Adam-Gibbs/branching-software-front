<template>
  <table class="table-auto w-full" v-show="assetList.length !== 0">
    <thead>
      <tr>
        <head-item
          :direction="sortDirection"
          title="Original Asset Type"
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
          title="CO<sup>2</sup>e saved per year"
          :isCol="sortCol === '3'"
          @click="sort('3')"
        />
        <head-item
          :direction="sortDirection"
          title="Original End of Life"
          :isCol="sortCol === '4'"
          @click="sort('4')"
        />
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="asset in assetList.filter(onlyDone)"
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
        <td class="font-medium items-center">
          <button
            class="block w-1/2 ml-10 py-3 text-center text-xs text-white font-bold leading-none bg-green-main hover:bg-green-highlight rounded"
            @click="$router.push(`/assets/proposals/${asset.id}`)"
          >
            <font-awesome-icon
              icon="sitemap"
              class="h-4 w-6 my-auto text-white"
            />
            View Project
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div
    class="py-4 text-center"
    v-show="assetList.filter(onlyDone).length === 0 || loading"
  >
    <font-awesome-icon
      icon="fan"
      class="text-green-main h-16 w-16 animate-spin"
      v-show="loading"
    />
    <p
      class="inline-flex items-center text-green-main font-medium text-sm"
      v-show="!loading"
    >
      <font-awesome-icon icon="thermometer-full" class="w-5 h-5 mr-1" />
      <span>It seems you have not yet replaced any assets.</span>
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
    onlyDone(value) {
      // Check if the asset EOL is in past
      return value.eol < Date.now();
    },
  },
  data: () => ({
    sortCol: "4",
    sortDirection: "up",
  }),
});
</script>
