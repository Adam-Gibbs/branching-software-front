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
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="asset in assetList" :key="asset" class="border-b text-center">
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
          <p class="text-base">{{ asset.eol }}</p>
          <p class="text-sm text-gray-500">Added on: {{ asset.addedOn }}</p>
        </td>
        <td class="font-medium items-center">
          <a
            class="block w-1/2 ml-10 py-3 text-center text-xs text-white font-bold leading-none bg-green-main hover:bg-green-highlight rounded"
            :href="`/assets/proposals/${asset.id}`"
          >
            <font-awesome-icon
              icon="cloud"
              class="h-4 w-6 my-auto text-white"
            />
            Proposals
          </a>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="py-4 text-center" v-show="assetList.length === 0">
    <a class="inline-flex items-center text-green-main font-medium" href="/add">
      <font-awesome-icon icon="thermometer-full" class="w-5 h-5 mr-1" />
      <span
        >It seems you have not yet added any assets, click here to get
        started.</span
      >
    </a>
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
  },
  data: () => ({
    sortCol: "1",
    sortDirection: "up",
  }),
});
</script>
