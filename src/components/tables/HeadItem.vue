<template>
  <th
    class="py-2 cursor-pointer text-sm"
    :class="isCol ? 'text-green-main' : 'text-gray-500'"
    scope="col"
  >
    <div class="flex items-center justify-center">
      <p v-html="title" />
      <font-awesome-icon
        :icon="isCol ? `sort-${direction}` : 'sort'"
        class="h-4 w-4 text-gray-400"
      />
    </div>
  </th>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    isCol: {
      type: Boolean,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
  },
});
</script>
