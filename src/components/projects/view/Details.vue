<template>
  <div class="w-full md:w-1/3 px-4 mb-6 lg:mb-0">
    <div class="relative px-6 pb-6 py-4 bg-white shadow rounded">
      <div class="mb-6">
        <h3 class="text-xl font-bold">{{ title }}</h3>
        <p class="text-sm text-gray-500">{{ subtitle }}</p>
      </div>
      <h3 class="mb-2 font-medium">{{ name }}</h3>
      <p
        v-for="paragraph in description"
        :key="paragraph"
        class="text-sm mb-2 text-gray-500"
      >
        {{ paragraph }}
      </p>
      <button
        class="inline-flex items-center my-3 py-3 px-4 text-sm text-white bg-green-main hover:bg-green-highlight rounded transition"
        v-show="showAccept"
      >
        <font-awesome-icon icon="check" class="mr-2 h-3 w-3" />
        <span>Accept this Project</span>
      </button>
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
    subtitle: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
    showAccept: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      assetID: this.$route.params.assetID,
      replies: [
        {
          message: "Reply 1",
          time: "1 hour ago",
        },
        {
          message: "Reply 2",
          time: "2 hours ago",
        },
        {
          message: "Reply 3",
          time: "3 hours ago",
        },
        {
          message: "Reply 4",
          time: "4 hours ago",
        },
        {
          message: "Reply 5",
          time: "5 hours ago",
        },
      ],
    };
  },
});
</script>
