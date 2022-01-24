<template>
  <div class="flex justify-between mb-4">
    <div class="flex items-center">
      <font-awesome-icon
        :icon="icon"
        class="w-16 h-16 p-1 mr-4 text-gray-400"
      />
      <div>
        <div class="flex mb-2">
          <h3 class="font-medium">{{ title }}</h3>
        </div>
        <p class="text-sm text-gray-500">
          {{ description }}
        </p>
      </div>
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
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>
