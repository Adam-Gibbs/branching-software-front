<template>
  <div class="p-6 mb-8 bg-white shadow rounded">
    <div class="flex mb-3 items-center justify-between">
      <h3 class="text-gray-500" v-html="title"></h3>
    </div>
    <font-awesome-icon
      icon="fan"
      class="text-green-main h-16 w-16 animate-spin"
      v-show="loading"
    />
    <div class="flex items-center mb-3" v-if="!loading">
      <span class="text-4xl font-bold">{{ value }}</span>
      <span
        v-if="change"
        class="inline-block ml-2 py-1 px-2 text-white text-xs rounded-full"
        :class="`bg-${getTrend(change)}-500`"
        >{{ change }}</span
      >
    </div>
    <div class="relative w-full h-1 mb-2 bg-gray-200 rounded" v-if="!loading">
      <div
        class="absolute top-0 left-0 h-full bg-green-main rounded"
        :style="`width: ${progress}%`"
      ></div>
    </div>
    <p class="text-xs text-gray-400" v-if="!loading">{{ subtitle }}</p>
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
    progress: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    change: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getTrend(value: string) {
      if (value.charAt(0) === "-") {
        return "red";
      } else {
        return "green";
      }
    },
  },
});
</script>
