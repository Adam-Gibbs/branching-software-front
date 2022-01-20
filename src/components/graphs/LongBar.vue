<template>
  <section class="py-8">
    <div class="container px-4 mx-auto">
      <div class="bg-white shadow rounded">
        <div class="flex flex-wrap items-center py-5 px-6">
          <h3
            class="w-full md:w-auto mb-4 md:mb-0 text-2xl font-bold"
            data-config-id="header"
          >
            {{ title }}
          </h3>
          <div
            v-if="dropdown.length > 0"
            class="ml-auto inline-block py-2 px-3 border rounded text-xs text-gray-500"
          >
            <select class="pr-1 bg-white">
              <option v-for="item in dropdown">{{ item }}</option>
            </select>
          </div>
        </div>
        <apexchart
          class="p-6"
          height="200"
          type="bar"
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
    xaxisData: {
      type: Array,
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
  data: function () {
    return {
      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        grid: {
          show: true,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#30A51B"],
        xaxis: {
          type: "integer",
          categories: this.xaxisData,
          labels: {
            show: true,
            hideOverlappingLabels: false,
            showDuplicates: true,
            trim: false,
          },
        },
        yaxis: {
          opposite: true,
          labels: {
            show: true,
            align: "right",
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
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
