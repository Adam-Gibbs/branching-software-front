<template>
  <a
    class="flex justify-center items-center py-3 border-2 cursor-pointer border-gray-400 border-dashed hover:border-gray-500 rounded text-sm text-gray-400 hover:text-gray-500"
    @click="link.length > 0 && $router.push(link)"
    :id="setId"
  >
    <font-awesome-icon icon="plus" class="mr-2 h-3 w-3" />
    <span>{{ title }}</span>
  </a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: "",
    },
    setId: {
      type: String,
      default: "",
    },
  },
});
</script>
