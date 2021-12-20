<template>
  <form class="m-4 flex">
    <input
      class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
      placeholder="your@mail.com"
    />
    <button
      @click="subscribeToggle"
      class="px-8 rounded-r-lg bg-midGreen font-bold bg-midGreen hover:bg-startGrad text-white text-center uppercase border-green-700 border-t border-b border-r"
    >
      Subscribe
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  methods: {
    subscribeToggle() {
      this.$emit("subscribeToggle");
    },
  },
});
</script>
