<template>
  <div class="flex items-center mb-8">
    <span
      class="inline-block w-2 h-2 ml-px mr-4 rounded-full bg-yellow-500"
    ></span>
    <div>
      <a class="mb-1 text-sm font-medium" href="#">{{ reply.message }}</a>
      <div class="flex items-center text-xs text-gray-500">
        <font-awesome-icon icon="clock" class="m-1 h-3 w-3" />
        <p>{{ reply.time }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    reply: {
      type: Object,
      required: true,
    },
  },
});
</script>
