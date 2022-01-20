<template>
  <div class="w-full md:w-1/3 px-4 mb-6 lg:mb-0">
    <div class="relative p-6 bg-white shadow rounded">
      <h3 class="text-center font-medium">{{ asset.name }}</h3>
      <p class="mb-6 text-center text-sm text-gray-500">{{ asset.location }}</p>
      <p class="mb-6 text-xs">{{ asset.description }}</p>
      <a
        class="flex items-center justify-center py-2 text-sm text-white bg-green-main hover:bg-green-highlight rounded transition"
        :href="`/add/existing/${asset.id}`"
      >
        <font-awesome-icon icon="edit" class="mr-1 h-4 w-4" />
        <span>Edit</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    asset: {
      type: Object,
      required: true,
    },
  },
});
</script>
