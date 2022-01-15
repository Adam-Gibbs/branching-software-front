<template>
  <div class="mx-auto lg:ml-80">
    <Header
      icon="history"
      title="Past Year"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>
