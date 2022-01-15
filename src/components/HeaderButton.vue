<template>
  <router-link
    class="inline-flex items-center py-2 px-3 mr-3 text-xs font-medium rounded"
    :class="`bg-${background} hover:bg-${hover} text-${text}`"
    :to="path"
  >
    <span class="inline-block mr-1">
      <font-awesome-icon :icon="icon" />
    </span>
    <span>{{ title }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    path: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: "white",
    },
    hover: {
      type: String,
      default: "green-light",
    },
    text: {
      type: String,
      default: "green-main",
    },
  },
});
</script>
