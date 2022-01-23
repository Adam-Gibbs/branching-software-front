<template>
  <section class="pb-8">
    <div class="container px-4 mx-auto">
      <div class="bg-white rounded">
        <div class="flex items-center py-5 px-6 border-b">
          <h3 class="text-2xl font-bold" v-html="title"></h3>
          <div
            v-if="dropdown.length > 0"
            class="ml-auto inline-block py-2 px-3 border rounded text-xs text-gray-500"
          >
            <select class="pr-1 bg-white">
              <option v-for="item in dropdown" :key="item">{{ item }}</option>
            </select>
          </div>
        </div>
        <apexchart
          height="350"
          type="line"
          :options="options"
          :series="series"
        />
      </div>
    </div>
  </section>
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
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            autoSelected: "zoom",
            tools: {
              download: false,
              selection: false,
              zoomin: false,
              zoomout: false,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        legend: {
          show: false,
        },
        colors: ["#30a51b", "#ef4444"],
        stroke: {
          width: 3,
        },
      },
      series: [
        {
          name: "Current",
          data: this.yaxisData,
        },
        {
          name: "Burndown Trend",
          data: [
            20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2,
            1,
          ],
        },
      ],
    };
  },
});
</script>
