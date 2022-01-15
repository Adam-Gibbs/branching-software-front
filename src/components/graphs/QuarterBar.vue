<template>
  <div class="p-6 bg-white shadow rounded">
    <div class="flex mb-3 items-center justify-between">
      <h3 class="text-gray-500">{{ title }}</h3>
    </div>
    <div class="flex items-center mb-3">
      <span class="text-4xl font-bold">{{ value }}</span>
      <span
        v-if="change"
        class="inline-block ml-2 py-1 px-2 text-white text-xs rounded-full"
        :class="`bg-${getTrend(change)}-500`"
        >{{ change }}</span
      >
    </div>
    <apexchart
      height="100"
      :options="options"
      :series="series"
      type="bar"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    yaxisData: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    change: {
      type: String,
      default: "",
    },
    dataNameA: {
      type: String,
      default: "",
    },
    dataNameB: {
      type: String,
      default: "",
    },
  },
  methods: {
    getTrend(value: string) {
      if (value.charAt(0) === "-") {
        return "red";
      } else {
        return "green";
      }
    },
  },
  data: function () {
    return {
      options: {
        chart: {
          stacked: true,
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#30A51B", "#2D70F5"],
      },
      series: [
        {
          name: this.dataNameA || this.title,
          data: [20, 50, 18, 50, 30, 40, 30, 40],
        },
        {
          name: this.dataNameB || "",
          data: [30, 0, 32, 0, 20, 10, 20, 10],
        },
      ],
    };
  },
});
</script>
