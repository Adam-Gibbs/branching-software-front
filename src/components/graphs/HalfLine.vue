<template>
  <div class="w-full lg:w-1/2 p-4">
    <div class="bg-white shadow rounded">
      <div class="flex items-center py-5 px-6">
        <h3 class="text-2xl font-bold">{{ title }}</h3>
        <div
          v-if="dropdown.length > 0"
          class="ml-auto inline-block py-2 px-3 border rounded text-xs text-gray-500"
        >
          <select class="pr-1 bg-white">
            <option v-for="item in dropdown" :key="item">{{ item }}</option>
          </select>
        </div>
      </div>
      <div class="pt-4 px-6">
        <div class="flex flex-wrap -m-4 pb-16">
          <div class="w-full md:w-1/2 p-4">
            <div class="py-4 px-6 border rounded">
              <h4 class="text-xs text-gray-500">
                {{ subtitleA }}
              </h4>
              <div class="flex items-center">
                <span class="mr-2 text-3xl font-bold">{{ valueA }}</span>
                <span
                  v-if="changeA"
                  class="py-1 px-2 text-xs text-white rounded-full"
                  :class="`bg-${getTrend(changeA)}-500`"
                  >{{ changeA }}</span
                >
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-4">
            <div class="py-4 px-6 border rounded">
              <h4 class="text-xs text-gray-500">
                {{ subtitleB }}
              </h4>
              <div class="flex items-center">
                <span class="mr-2 text-3xl font-bold">{{ valueB }}</span>
                <span
                  v-if="changeB"
                  class="py-1 px-2 text-xs text-white rounded-full"
                  :class="`bg-${getTrend(changeB)}-500`"
                  >{{ changeB }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <apexchart
        height="180"
        type="area"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    dropdown: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
    yaxisData: {
      type: Array,
      required: true,
    },
    subtitleA: {
      type: String,
      required: true,
    },
    subtitleB: {
      type: String,
      required: true,
    },
    valueA: {
      type: String,
      required: true,
    },
    valueB: {
      type: String,
      required: true,
    },
    changeA: {
      type: String,
      default: "",
    },
    changeB: {
      type: String,
      default: "",
    },
    dataName: {
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
          sparkline: {
            enabled: true,
          },
        },
        colors: ["#30A51B"],
        fill: {
          type: ["solid"],
          colors: ["#EBEAFC"],
        },
        stroke: {
          curve: "straight",
          width: 2,
        },
        __variants: {
          "dark-bg": {
            colors: ["#8880EB"],
            fill: {
              type: ["solid"],
              colors: ["#6056E4"],
            },
          },
        },
      },
      series: [
        {
          name: this.dataName || this.title,
          data: this.yaxisData,
        },
      ],
    };
  },
});
</script>
