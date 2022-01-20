<template>
  <div class="w-full lg:w-1/3 px-4">
    <div class="pt-5 pb-16 px-6 bg-white shadow rounded">
      <h3 class="text-xl font-bold mb-12">Value Breakdown</h3>
      <div id="chart">
        <apexchart
          type="radialBar"
          height="250"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: function () {
    return {
      chartOptions: {
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ["#19580E", "#30a51b", "#56E03E"],
        labels: ["Time", "Cost", "Reduction"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 40,
          labels: {
            useSeriesColors: true,
          },
          formatter: function (
            seriesName: string,
            opts: {
              w: { globals: { series: { [x: string]: string } } };
              seriesIndex: string | number;
            }
          ) {
            if (seriesName === "Time") {
              return (
                seriesName +
                ":  " +
                opts.w.globals.series[opts.seriesIndex] +
                " Months"
              );
            }
            if (seriesName === "Cost") {
              return (
                seriesName +
                ":  £" +
                opts.w.globals.series[opts.seriesIndex] +
                ",000"
              );
            }
            if (seriesName === "Reduction") {
              return (
                seriesName +
                ":  " +
                opts.w.globals.series[opts.seriesIndex] +
                "%"
              );
            }
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: -2,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      show: true,
                    },
                    value: {
                      show: true,
                    },
                  },
                },
              },
            },
          },
        ],
      },
      series: [76, 67, 61],
    };
  },
});
</script>
