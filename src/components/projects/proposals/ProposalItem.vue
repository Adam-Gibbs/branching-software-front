<template>
  <div
    class="flex justify-between items-center mb-2 p-4 border-2 border-gray-200 hover:bg-gray-100 rounded-2xl cursor-pointer overflow-y-auto"
  >
    <div class="flex items-center">
      <span class="inline-flex w-10 h-10 mr-3 justify-center items-center">
        <font-awesome-icon
          icon="clipboard-list"
          class="h-6 w-6 text-gray-300"
        />
      </span>
      <div>
        <h4 class="text-sm font-medium">{{ proposal.name }}</h4>
        <p class="text-xs text-gray-500">{{ proposal.issuer }}</p>
      </div>
    </div>
    <div class="flex items-center">
      <span
        class="inline-block mr-3 py-1 px-2 bg-indigo-50 text-xs text-green-main rounded-full"
        >{{ proposal.emissions }}% Reduction in Emissions</span
      >
      <span
        class="inline-block mr-3 py-1 px-2 bg-indigo-50 text-xs text-green-main rounded-full"
        >{{ proposal.months }} Months to Complete</span
      >
      <span
        class="inline-block mr-3 py-1 px-2 bg-indigo-50 text-xs text-green-main rounded-full"
        >£{{ proposal.cost }} Estimated Cost</span
      >
      <font-awesome-icon icon="check" class="h-6 w-6 text-gray-300" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    proposal: {
      type: Object,
      required: true,
    },
  },
});
</script>
