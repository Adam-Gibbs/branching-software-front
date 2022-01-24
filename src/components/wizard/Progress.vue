<template>
  <div class="relative w-full h-2 mb-2 bg-gray-50 rounded">
    <div
      class="absolute top-0 left-0 h-full bg-green-main rounded"
      :style="`width: ${value}%`"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
});
</script>
