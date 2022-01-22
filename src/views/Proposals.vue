<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="drafting-compass"
      title="All Assets"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <Warning
      class="container px-4 mx-auto"
      v-for="item in warningList"
      :text="item"
      :key="item"
      @removeWarning="removeWarning($event)"
    />
    <section class="pb-8">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4">
          <Title :loading="asset.id === undefined" :asset="asset" />
          <div class="w-full md:w-1/3 px-4 mb-6 lg:mb-0">
            <!-- TODO get location totals -->
            <quarter-progress
              :loading="asset.id === undefined"
              :progress="'20'"
              title="CO<sup>2</sup>e produced per year"
              :value="`${asset.co2}kg`"
              :subtitle="`12% of locations total`"
            />
          </div>
          <div class="w-full md:w-1/3 px-4 mb-6 lg:mb-0">
            <quarter-progress
              :loading="asset.id === undefined"
              :progress="dateProgressValue(asset).toString()"
              title="Date of expected end of life"
              :value="new Date(asset.eol).toLocaleDateString()"
              :subtitle="findLargestUntil(asset.eol)"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="pb-8">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4">
          <Replies />
          <proposal-list />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Warning from "@/components/alerts/Warning.vue";
import Title from "@/components/projects/proposals/Title.vue";
import QuarterProgress from "@/components/graphs/QuarterProgress.vue";
import Replies from "@/components/projects/proposals/Replies.vue";
import ProposalList from "@/components/projects/proposals/ProposalList.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Warning,
    Title,
    QuarterProgress,
    Replies,
    ProposalList,
  },
  data: function () {
    return {
      warningList: [],
      loading: true,
      asset: {},
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.sendRequest();
    });
  },
  methods: {
    addWarning(text) {
      if (!this.warningList.includes(text)) {
        this.warningList.push(text);
      }
    },
    removeWarning(text) {
      this.warningList.splice(this.warningList.indexOf(text), 1);
    },
    sendRequest() {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          assetId: this.$route.params.assetId,
        }),
      };
      fetch(process.env.VUE_APP_APIURL + "/v1/assets/get", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (await !response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          this.loading = false;
          this.asset = data.result;
        })
        .catch(() => {
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
    },
    dateProgressValue(asset) {
      const mid = Date.now() - asset.createdAt;
      const end = asset.eol - asset.createdAt;
      const percent = mid / end;
      if (percent > 1) {
        return 100;
      } else {
        return percent * 100;
      }
    },
    findLargestUntil(eol) {
      let diff = eol - Date.now();
      let afterText = "until EOL";
      if (diff < 0) {
        diff = -diff;
        afterText = "after EOL";
      }
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      if (days === 0) {
        return `>1 day ${afterText}`;
      } else if (days === 1) {
        return `${days} day ${afterText}`;
      }
      const weeks = Math.floor(days / 7);
      if (weeks === 0) {
        return `${days} days ${afterText}`;
      } else if (weeks === 1) {
        return `${weeks} week ${afterText}`;
      }
      const months = Math.floor(days / 30);
      if (months === 0) {
        return `${weeks} weeks ${afterText}`;
      } else if (months === 1) {
        return `${months} month ${afterText}`;
      } else {
        return `${months} months ${afterText}`;
      }
    },
  },
});
</script>
