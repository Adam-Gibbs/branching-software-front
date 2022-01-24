<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="file-invoice"
      title="All Projects"
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
import Base from "@/components/projects/view/Base.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Base,
  },
  data: function () {
    return {
      projectID: this.$route.params.projectId,
    };
  },
});
</script>
