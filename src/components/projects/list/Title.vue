<template>
  <div
    class="pt-3 px-6 mb-6 bg-white rounded border-t-4 shadow cursor-pointer"
    :class="`border-${colour}-500`"
  >
    <div class="flex justify-between items-center pb-3">
      <h3 class="font-medium">{{ title }}</h3>
      <span
        class="flex justify-center items-center w-6 h-6 rounded text-xs"
        :class="`bg-${colour}-50 text-${colour}-500`"
        >{{ count }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    colour: {
      type: String,
      required: true,
    },
    count: {
      type: String,
      required: true,
    },
  },
});
</script>
