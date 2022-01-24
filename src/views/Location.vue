<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="map-marker-alt"
      title="Location Stats"
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
    <TopBoxes :data="locationData" />
    <Burndown
      title="Burndown to date of Net Zero"
      :yaxisData="locationData.burndown.yaxis"
    />
    <LineMix :data="locationData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Warning from "@/components/alerts/Warning.vue";
import TopBoxes from "@/components/location/TopBoxes.vue";
import LineMix from "@/components/location/LineMix.vue";
import Burndown from "@/components/graphs/Burndown.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Warning,
    TopBoxes,
    LineMix,
    Burndown,
  },
  data() {
    return {
      locationData: {
        burndown: {
          yaxis: [],
        },
        quarterProgress: {
          value: "0kg",
          progress: "0",
        },
        ongoing: "0",
        halfline: {
          changeB: "+0%",
          changeA: "+0%",
          valueB: "0",
          yaxis: [],
          valueA: "0",
        },
        outputDay: "0kg",
        quarterBar: {
          dataA: [],
          value: "0kg",
          change: "+0%",
          dataB: [],
        },
        outputTotal: "0kg",
      },
      warningList: Array<string>(),
      loading: false,
    };
  },
  mounted() {
    console.log("mounted");
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
          this.locationData = data.result.locationData;
        })
        .catch(() => {
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
    },
  },
});
</script>
