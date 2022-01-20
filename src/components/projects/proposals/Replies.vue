<template>
  <div class="w-full md:w-1/3 px-4 mb-6 lg:mb-0">
    <div class="relative px-6 pb-6 py-4 bg-white shadow rounded">
      <div class="mb-6">
        <h3 class="text-xl font-bold">Messages</h3>
        <p class="text-sm text-gray-500">
          All recent messages about related proposals.
        </p>
      </div>
      <div class="relative">
        <div class="absolute inset-0 h-full ml-1 w-px px-px bg-gray-300"></div>
        <div class="relative">
          <reply-item v-for="item in replies" :key="item" :reply="item" />
        </div>
        <div
          class="absolute bottom-0 pt-14 w-full text-center bg-white bg-opacity-50"
        >
          <a
            class="inline-flex items-center py-3 px-4 text-sm text-white bg-green-main hover:bg-green-highlight rounded transition"
            href="#"
          >
            <font-awesome-icon icon="arrow-down" class="mr-2 h-3 w-3" />
            <span>View Previous Messages</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReplyItem from "@/components/projects/proposals/ReplyItem.vue";

export default defineComponent({
  components: {
    ReplyItem,
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
