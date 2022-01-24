<template>
  <section class="pb-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div class="w-full lg:w-1/3 p-4">
          <SingleBox
            title="Number of ongoing projects"
            icon="file-invoice"
            timeframe="currently"
            :value="data.ongoing"
            change="+60"
            link="/add"
          />
        </div>
        <div class="w-full lg:w-1/3 p-4">
          <SingleBox
            title="CO<sup>2</sup>e Output in past 24hrs"
            icon="cloud-meatball"
            :timeframe="`since ${yesterday()} yesterday`"
            :value="data.outputDay"
            change="-6"
            comparedTo="the average last year"
          />
        </div>
        <div class="w-full lg:w-1/3 p-4">
          <SingleBox
            title="Total CO<sup>2</sup>e Output"
            icon="cloud-meatball"
            timeframe="since 1st January 2022"
            :value="data.outputTotal"
            change="+12"
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
  methods: {
    yesterday() {
      const time = new Date(Date.now() - 86400 * 1000);
      return time.getHours() + ":" + time.getMinutes();
    },
  },
});
</script>
