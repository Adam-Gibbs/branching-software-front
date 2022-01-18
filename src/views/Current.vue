<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="mouse-pointer"
      title="Current Stats"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <long-bar
      title="Data"
      :xaxisData="[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ]"
      :yaxisData="[
        300, 400, 200, 350, 500, 400, 300, 200, 100, 400, 500, 300, 400, 200,
        100, 300, 400, 200, 350, 500, 400, 300, 200, 100, 400, 500, 300, 400,
        200, 100, 250,
      ]"
    />
    <line-mix />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import LongBar from "@/components/graphs/LongBar.vue";
import LineMix from "@/components/graphs/LineMix.vue";
import Nav from "@/components/Nav.vue";

export default defineComponent({
  name: "App",
  components: {
    Nav,
    Header,
    LongBar,
    LineMix,
  },
});
</script>
