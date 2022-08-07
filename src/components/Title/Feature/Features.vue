<template>
  <section id="features" class="relative py-24 overflow-hidden bg-gray-100">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center -m-6">
        <TitleFeatureImage />
        <div class="w-full lg:w-5/12 p-8 lg:p-16">
          <div class="lg:max-w-md">
            <h2
              class="mb-10 font-heading font-bold text-4xl sm:text-5xl text-gray-900"
            >
              Control every project from a place without hassle.
            </h2>
            <TitleFeatureItem
              :active="true"
              title="Asset Management"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />
            <TitleFeatureItem
              title="Carbon Budget Overview"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />
            <TitleFeatureItem
              title="Solution Marketplace"
              description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TitleFeatureImage from "./Image.vue";
import TitleFeatureItem from "./Item.vue";

export default defineComponent({
  name: "Title",
  components: {
    TitleFeatureImage,
    TitleFeatureItem,
  },
});
</script>
