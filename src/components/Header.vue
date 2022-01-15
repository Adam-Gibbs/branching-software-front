<template>
  <section class="py-8 px-6">
    <div class="flex flex-wrap -mx-3 items-center">
      <div class="w-full lg:w-1/2 flex items-center mb-5 lg:mb-0 px-3">
        <span
          class="inline-flex justify-center items-center w-16 h-16 mr-4 bg-green-main rounded-2xl text-white"
        >
          <font-awesome-icon :icon="icon" class="w-10 h-10" />
        </span>
        <div>
          <h2 class="mb-1 text-2xl font-bold">{{ title }}</h2>
          <p class="text-sm text-gray-500 font-medium">
            {{ description }}
          </p>
        </div>
      </div>
      <div class="w-full lg:w-auto ml-auto px-3">
        <header-button title="Settings" icon="cog" path="/settings" />
        <header-button
          title="Report"
          icon="file-download"
          path="/report"
          text="white"
          background="green-main"
          hover="green-highlight"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderButton from "@/components/HeaderButton.vue";

export default defineComponent({
  components: { HeaderButton },
  props: {
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
