<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="plus"
      title="Add Asset"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";

export default defineComponent({
  name: "App",
  components: {
    Nav,
    Header,
  },
});
</script>
