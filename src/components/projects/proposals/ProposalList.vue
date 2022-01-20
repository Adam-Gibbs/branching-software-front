<template>
  <div class="w-full lg:w-2/3 px-4">
    <div class="px-6 pb-6 pt-4 bg-white shadow rounded">
      <div class="flex flex-wrap items-center mb-3">
        <div>
          <div class="flex items-center">
            <h3 class="mr-2 text-xl font-bold">Projects In Progress</h3>
            <span
              class="py-1 px-2 bg-green-main text-xs text-white rounded-full"
              >{{ proposals.length }} New</span
            >
          </div>
          <p class="text-sm text-gray-500">
            All current proposals, click through to find out more.
          </p>
        </div>
      </div>
      <proposal-item
        v-for="proposal in proposals"
        :key="proposal"
        :proposal="proposal"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProposalItem from "@/components/projects/proposals/ProposalItem.vue";

export default defineComponent({
  components: {
    ProposalItem,
  },
  data: function () {
    return {
      assetID: this.$route.params.assetID,
      proposals: [
        {
          name: "Project 1",
          issuer: "Issuer 1",
          emissions: "90",
          months: "12",
          cost: "1,000",
        },
        {
          name: "Project 2",
          issuer: "Issuer 2",
          emissions: "80",
          months: "24",
          cost: "2,000",
        },
        {
          name: "Project 3",
          issuer: "Issuer 3",
          emissions: "75",
          months: "36",
          cost: "3,000",
        },
      ],
    };
  },
});
</script>
