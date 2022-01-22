<template>
  <div class="flex flex-wrap -mx-2">
    <div class="w-full md:w-1/2 px-2 mb-2 md:mb-0">
      <button
        class="flex items-center w-full justify-center py-2 font-bold text-green-main bg-gray-200 hover:bg-green-highlight hover:text-white rounded transition"
        v-show="!first"
        @click="emitPrevious"
      >
        <font-awesome-icon icon="chevron-left" class="h-4 w-8" />
        <span>Previous</span>
      </button>
    </div>
    <div class="w-full md:w-1/2 px-2">
      <button
        class="flex items-center w-full justify-center py-2 font-bold text-white bg-green-main hover:bg-green-highlight rounded transition"
        @click="emitNext"
      >
        <span v-show="!last && !loading">Next</span>
        <font-awesome-icon
          v-show="!last && !loading"
          icon="chevron-right"
          class="h-4 w-8"
        />
        <span v-show="last && !loading">Submit</span>
        <font-awesome-icon
          v-show="last && !loading"
          icon="paper-plane"
          class="h-4 w-8"
        />
        <font-awesome-icon
          icon="fan"
          class="h-6 w-6 animate-spin"
          v-show="loading"
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    first: {
      type: Boolean,
      required: true,
    },
    last: {
      type: Boolean,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitNext: function () {
      this.$emit("next");
    },
    emitPrevious: function () {
      this.$emit("previous");
    },
  },
});
</script>
