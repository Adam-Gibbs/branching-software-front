<template>
  <section class="pb-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="w-full lg:w-1/3 p-4">
          <single-box
            title="Assets Added"
            icon="sitemap"
            timeframe="in 2021"
            :value="data.assetsAdded"
            change="+12"
            link="/add"
            comparedTo="this year"
          />
        </div>
        <div class="w-full lg:w-1/3 p-4">
          <single-box
            title="Total CO<sup>2</sup>e Reduction"
            icon="compress-arrows-alt"
            timeframe="in 2021"
            :value="data.co2Reduction"
            change="-85"
            comparedTo="this year"
          />
        </div>
        <div class="w-full lg:w-1/3 p-4">
          <single-box
            title="Total CO<sup>2</sup>e Output"
            icon="cloud-meatball"
            timeframe="in 2021"
            :value="data.totalCO2Output"
            change="+12"
            comparedTo="this year"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SingleBox from "@/components/data_boxes/Single.vue";

export default defineComponent({
  components: { SingleBox },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
