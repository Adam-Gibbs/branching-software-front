<template>
  <div>
    <div class="mb-6 bg-gradient-to-r from-startGrad to-endGrad h-px"></div>
    <div class="mb-5 flex flex-wrap items-center justify-between">
      <h3 class="font-heading font-bold text-lg text-gray-900">{{ title }}</h3>
      <a href="#">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 11.25L9 6L14.25 11.25"
            stroke="#18181B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    </div>
    <p v-if="active" class="mb-5 text-base text-gray-600">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Title",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
