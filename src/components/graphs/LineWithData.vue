<template>
  <section class="pb-8">
    <div class="container px-4 mx-auto">
      <div class="shadow rounded overflow-hidden">
        <div class="bg-green-800 pb-3">
          <h3 class="p-6 text-xl font-bold text-white">{{ title }}</h3>
          <apexchart
            height="150"
            type="area"
            :options="options"
            :series="series"
          />
        </div>
        <div class="flex flex-wrap -m-3 px-6 py-10 bg-white">
          <div v-for="boxItem in boxData" :key="boxItem" class="w-1/2 p-3">
            <div class="py-4 px-6 border rounded">
              <p class="text-xs text-gray-500" v-html="boxItem.name"></p>
              <h3 class="text-3xl font-bold" v-html="boxItem.value"></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    yaxis: {
      type: Array,
      required: true,
    },
    xaxis: {
      type: Array,
      required: true,
    },
    dataName: {
      type: String,
      required: true,
    },
    boxData: {
      type: Array,
      required: true,
    },
  },
  data: function () {
    return {
      options: {
        chart: {
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "smooth",
        },
        colors: ["#30A51B"],
        fill: {
          colors: ["#E9F5E7"],
        },
        xaxis: {
          type: "datetime",
          categories: this.xaxis,
        },
      },
      series: [
        {
          name: this.dataName,
          data: this.yaxis,
        },
      ],
    };
  },
});
</script>
