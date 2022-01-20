<template>
  <div class="p-6 mb-4 bg-white rounded shadow cursor-pointer">
    <div class="flex justify-between items-center mb-2">
      <span
        class="inline-block py-1 px-2 bg-blue-50 text-xs text-green-main rounded-full"
        >{{ project.assetType }}</span
      >
    </div>
    <div class="mb-4">
      <h3 class="mb-2 font-medium">{{ project.name }}</h3>
      <p class="text-sm text-gray-500">
        {{ project.description }}
      </p>
    </div>
    <div class="flex justify-between">
      <div class="flex">
        <p class="flex mr-4 items-center text-xs text-gray-500" href="#">
          <font-awesome-icon
            icon="comment"
            class="mr-2 h-3 w-3 text-gray-400"
          />
          <span>Replies: {{ project.replies }}</span>
        </p>
        <p class="flex mr-4 items-center text-xs text-gray-500" href="#">
          <font-awesome-icon
            icon="paperclip"
            class="mr-2 h-3 w-3 text-gray-400"
          />
          <span>Proposals: {{ project.proposals }}</span>
        </p>
        <p class="flex items-center text-xs text-gray-500" href="#">
          <font-awesome-icon icon="check" class="mr-2 h-3 w-3 text-gray-400" />
          <span>Accepted: {{ project.accepted }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    project: {
      type: Object,
      required: false,
    },
  },
});
</script>
