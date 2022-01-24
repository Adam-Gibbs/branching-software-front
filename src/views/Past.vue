<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="history"
      title="Past Year"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <Warning
      class="container mb-4 mx-auto"
      v-for="item in warningList"
      :text="item"
      :key="item"
      @removeWarning="removeWarning($event)"
    />
    <TopBoxes :data="pastData" />
    <LineWithData
      title="Assets replaced over past year"
      :xaxis="pastData.assetsReplaced.xaxis"
      :yaxis="pastData.assetsReplaced.yaxis"
      dataName="Asset replacements"
      :boxData="[
        { name: 'Total assets replaced', value: pastData.totalAssetsReplaced },
        { name: 'Total CO<sup>2</sup>e saved', value: pastData.totalCO2Saved },
        {
          name: 'Number of affected locations',
          value: pastData.affectedLocations,
        },
        { name: 'Total cost', value: pastData.totalCost },
      ]"
    />
    <LongBar
      title="CO<sup>2</sup>e output each week of the last year"
      :xaxisData="pastData.outputEachWeek.xaxis"
      :yaxisData="pastData.outputEachWeek.yaxis"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Warning from "@/components/alerts/Warning.vue";
import TopBoxes from "@/components/past/TopBoxes.vue";
import LineWithData from "@/components/graphs/LineWithData.vue";
import LongBar from "@/components/graphs/LongBar.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Warning,
    TopBoxes,
    LineWithData,
    LongBar,
  },
  data() {
    return {
      pastData: {
        assetsAdded: "0",
        totalCO2Saved: "0kg",
        assetsReplaced: {
          xaxis: [],
          yaxis: [],
        },
        totalCO2Output: "0kg",
        totalAssetsReplaced: "0",
        outputEachWeek: {
          xaxis: [],
          yaxis: [],
        },
        co2Reduction: "0kg",
        affectedLocations: "0",
        totalCost: "£0",
      },
      warningList: Array<string>(),
      loading: false,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.sendRequest();
    });
  },
  methods: {
    addWarning(text: string) {
      if (!this.warningList.includes(text)) {
        this.warningList.push(text);
      }
    },
    removeWarning(text: string) {
      this.warningList.splice(this.warningList.indexOf(text), 1);
    },
    sendRequest() {
      this.loading = true;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
        }),
      };
      fetch(process.env.VUE_APP_APIURL + "/v1/user", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (await !response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          this.loading = false;
          this.pastData = data.result.pastData;
        })
        .catch(() => {
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
    },
  },
});
</script>
