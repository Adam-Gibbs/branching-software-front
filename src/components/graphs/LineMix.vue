<template>
  <section class="pb-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-4">
        <HalfLine
          title="Balance"
          :yaxisData="[
            10, 8, 9, 8, 11, 16, 4, 15, 18, 21, 18, 16, 19, 14, 13, 18, 10, 10,
            10, 22, 19, 20, 18, 17, 19, 13, 18, 14, 15,
          ]"
          subtitleA="Earnings"
          subtitleB="Sales Value"
          valueA="43.41%"
          valueB="$95,422"
          changeA="+12%"
        />
        <div class="w-full lg:w-1/2 p-4">
          <QuarterProgress
            value="$124,563.00"
            subtitle="Yearly Goal"
            title="Total"
            progress="50"
            change="+10%"
          />
          <QuarterBar title="New Users" value="94.2%" change="+5%" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HalfLine from "./HalfLine.vue";
import QuarterBar from "./QuarterBar.vue";
import QuarterProgress from "./QuarterProgress.vue";

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
  components: {
    HalfLine,
    QuarterBar,
    QuarterProgress,
  },
});
</script>
