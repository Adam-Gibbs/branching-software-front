<template>
  <div class="p-6 bg-white shadow rounded">
    <div class="flex mb-3 items-center justify-between">
      <h3 class="text-gray-800 uppercase font-bold text-xl">{{ title }}</h3>
      <button @click="emitAddDelete()">
        <font-awesome-icon icon="trash" class="h-4 w-4 text-gray-400" />
      </button>
    </div>
    <div class="flex items-center mb-3">
      <p class="text-4xl text-gray-600 font-bold">{{ value }}</p>
      <span
        v-if="change"
        class="inline-block ml-2 py-1 px-2 text-white text-xs rounded-full"
        :class="`bg-${getTrend(change)}-500`"
        >{{ change }}</span
      >
    </div>
    <div class="relative w-full h-1 mb-2 bg-gray-50 rounded">
      <div
        class="absolute top-0 left-0 h-full rounded"
        :class="randomColour()"
        :style="`width: ${progress}%`"
      ></div>
    </div>
    <p class="text-xs text-gray-400">{{ subtitle }}</p>
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
    value: {
      type: String,
      required: true,
    },
    progress: {
      type: String,
      required: true,
    },
    deleteLink: {
      type: String,
      required: true,
    },
    change: {
      type: String,
      default: "",
    },
    subtitle: {
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
    random(min = 1, max = 9) {
      return Math.floor(Math.random() * max) + min;
    },
    randomColour() {
      const indexColor = this.random(0, this.colors.length - 1);
      return `bg-${this.colors[indexColor]}-${this.random(4, 4)}00`;
    },
    emitAddDelete: function () {
      this.$emit("addDelete", this.deleteLink);
    },
  },
  data: function () {
    return {
      colors: ["red", "yellow", "green", "blue", "purple", "pink"],
    };
  },
});
</script>
