<template>
  <Title />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "@/components/Title/Title.vue";

export default defineComponent({
  name: "App",
  components: {
    Title,
  },
});
</script>
