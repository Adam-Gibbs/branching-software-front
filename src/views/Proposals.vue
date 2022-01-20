<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="drafting-compass"
      title="All Assets"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <Base />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Base from "@/components/projects/proposals/Base.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Base,
  },
  data: function () {
    return {
      assetID: this.$route.params.assetID,
    };
  },
});
</script>
