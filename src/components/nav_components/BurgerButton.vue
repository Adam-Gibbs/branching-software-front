<template>
  <nav class="lg:hidden py-6 px-6 border-b flex items-center justify-between">
    <img
      class="h-10"
      src="@/assets/icon.svg"
      alt="Icon for Branching Software"
    />
    <button
      class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white navbar-burger rounded"
      @click="toggleOpen()"
    >
      <span class="sr-only">Open main menu</span>
      <div
        class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
          :class="{ 'rotate-45': !open, ' -translate-y-1.5': open }"
        ></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
          :class="{ 'opacity-0': !open }"
        ></span>
        <span
          aria-hidden="true"
          class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
          :class="{ '-rotate-45': !open, ' translate-y-1.5': open }"
        ></span>
      </div>
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleOpen: function () {
      this.$emit("toggleOpen", !this.open);
    },
  },
});
</script>
