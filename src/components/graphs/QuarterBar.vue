<template>
  <div class="p-6 bg-white shadow rounded">
    <div class="flex mb-3 items-center justify-between">
      <h3 class="text-gray-500" v-html="title" />
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
    <apexchart height="100" :options="options" :series="series" type="bar" />
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
    value: {
      type: String,
      required: true,
    },
    dataA: {
      type: Array,
      required: true,
    },
    dataNameA: {
      type: String,
      default: "",
    },
    dataB: {
      type: Array,
      default: () => [],
    },
    dataNameB: {
      type: String,
      default: "",
    },
    change: {
      type: String,
      default: "",
    },
  },
  watch: {
    dataA: {
      immediate: true,
      handler() {
        this.series = [
          {
            name: this.dataNameA || this.title,
            data: this.dataA,
          },
          {
            name: this.dataNameB || "",
            data: this.dataB,
          },
        ];
      },
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
          sparkline: {
            enabled: true,
          },
        },
        tooltip: {
          x: {
            show: false,
          },
        },
        colors: ["#30A51B", "#2D70F5"],
        plotOptions: {
          bar: {
            borderRadius: 10,
          },
        },
      },
      series: [
        {
          name: this.dataNameA || this.title,
          data: this.dataA,
        },
        {
          name: this.dataNameB || "",
          data: this.dataB,
        },
      ],
    };
  },
});
</script>
