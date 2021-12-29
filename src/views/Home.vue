<template>
  <LandingPage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LandingPage from "@/components/LandingPage.vue";

export default defineComponent({
  name: "App",
  components: {
    LandingPage,
  },
});
</script>
