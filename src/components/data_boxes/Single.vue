<template>
  <div
    class="p-6 rounded bg-white"
    :class="{ 'cursor-pointer': link.length > 0 }"
    @click="link.length > 0 && $router.push(link)"
  >
    <div class="flex mb-2 text-green-main">
      <font-awesome-icon :icon="icon" class="inline-block mr-2 h-4 w-4" />
      <h3 class="text-sm text-gray-600" v-html="title"></h3>
      <span
        class="inline-block ml-auto px-2 py-1 text-xs bg-green-light rounded-full"
        >{{ timeframe }}</span
      >
    </div>
    <h2 class="mb-2 text-3xl font-bold">{{ value }}</h2>
    <span class="text-xs" :class="`text-${getTrend(change)}-500`">
      <font-awesome-icon
        v-if="getTrend(change) === 'red'"
        icon="angle-double-down"
        class="inline-block mr-2 h-3 w-3"
      />
      <font-awesome-icon
        v-else
        icon="angle-double-up"
        class="inline-block mr-2 h-3 w-3"
      />
      <span>{{ change }}% compared to {{ comparedTo }}</span>
    </span>
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
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    timeframe: {
      type: String,
      required: true,
    },
    change: {
      type: String,
      default: "",
    },
    comparedTo: {
      type: String,
      default: "last year",
    },
    link: {
      type: String,
      default: "",
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
