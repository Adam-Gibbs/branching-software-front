<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="drafting-compass"
      title="All Assets"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <section class="pt-8">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4">
          <Title :asset="asset" />
          <div class="w-full md:w-1/3 px-4 mb-6 lg:mb-0">
            <!-- TODO get location totals -->
            <quarter-progress
              :progress="'20'"
              title="CO<sup>2</sup>e produced per year"
              :value="`${asset.co2}kg`"
              :subtitle="`12% of locations total`"
            />
          </div>
          <div class="w-full md:w-1/3 px-4 mb-6 lg:mb-0">
            <quarter-progress
              :progress="dateProgressValue()"
              title="Date of expected end of life"
              :value="new Date(asset.eol).toLocaleDateString()"
              :subtitle="findLargestUntil()"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="py-8">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap -mx-4">
          <Replies />
          <proposal-list />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Title from "@/components/projects/proposals/Title.vue";
import QuarterProgress from "@/components/graphs/QuarterProgress.vue";
import Replies from "@/components/projects/proposals/Replies.vue";
import ProposalList from "@/components/projects/proposals/ProposalList.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Title,
    QuarterProgress,
    Replies,
    ProposalList,
  },
  data: function () {
    return {
      assetID: this.$route.params.assetID,
      projectID: this.$route.params.projectId,
      asset: {
        name: "Asset 1",
        id: "1",
        location: "London",
        description: "This is a description of the asset",
        eol: Date.now() + 900000000,
        createdAt: Date.now() - 40000000,
        co2: 250,
      },
    };
  },
  methods: {
    dateProgressValue() {
      console.log(Date.now());
      const mid = Date.now() - this.asset.createdAt;
      const end = this.asset.eol - this.asset.createdAt;
      const percent = mid / end;
      if (percent > 1) {
        return 100;
      } else {
        return percent * 100;
      }
    },
    findLargestUntil() {
      let diff = this.asset.eol - Date.now();
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
