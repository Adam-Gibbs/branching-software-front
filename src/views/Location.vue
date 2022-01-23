<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="map-marker-alt"
      title="Location Stats"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <TopBoxes />
    <Burndown
      title="Burndown to date of Net Zero"
      :yaxisData="[
        0, 9, 5, 10, 9, 2, 2, 8, 4, 5, 4, 3, 2, 5, 1, 10, 10, 4, 2, 0, 1, 2, 7,
        4, 7, 6, 0, 7, 11, 6,
      ]"
    />
    <LineMix />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import TopBoxes from "@/components/location/TopBoxes.vue";
import LineMix from "@/components/location/LineMix.vue";
import Burndown from "@/components/graphs/Burndown.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    TopBoxes,
    LineMix,
    Burndown,
  },
});
</script>
