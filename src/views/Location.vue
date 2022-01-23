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
        22,
        22,
        21,
        19,
        18,
        18,
        15,
        14,
        13,
        11,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
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
