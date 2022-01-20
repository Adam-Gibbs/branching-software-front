<template>
  <section class="pt-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <Title :asset="asset" />
        <div class="w-full md:w-1/3 px-4 mb-6 lg:mb-0">
          <quarter-progress
            progress="20"
            title="CO<sup>2</sup>e produced per year"
            value="600kg"
            subtitle="12% of locations total"
          />
        </div>
        <div class="w-full md:w-1/3 px-4 mb-6 lg:mb-0">
          <quarter-progress
            progress="20"
            title="Date of expected end of life"
            value="24/02/2022"
            subtitle="1 month until EOL"
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "@/components/projects/proposals/Title.vue";
import QuarterProgress from "@/components/graphs/QuarterProgress.vue";
import Replies from "@/components/projects/proposals/Replies.vue";
import ProposalList from "@/components/projects/proposals/ProposalList.vue";

export default defineComponent({
  components: {
    Title,
    QuarterProgress,
    Replies,
    ProposalList,
  },
  data: function () {
    return {
      projectID: this.$route.params.projectId,
      asset: {
        name: "Asset 1",
        id: "1",
        location: "London",
        description: "This is a description of the asset",
      },
    };
  },
});
</script>
