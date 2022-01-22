<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="medal"
      title="Goals"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <goal-wizard />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import GoalWizard from "@/components/wizard/goal/GoalWizard.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    GoalWizard,
  },
});
</script>
