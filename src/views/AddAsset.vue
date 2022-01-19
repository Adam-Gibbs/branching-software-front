<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="plus"
      title="Add Asset"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <add-wizard />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import AddWizard from "@/components/wizard/add/AddWizard.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    AddWizard,
  },
});
</script>
