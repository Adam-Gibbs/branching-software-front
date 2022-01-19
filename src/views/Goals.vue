<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="medal"
      title="Goals"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <GoalRows
      :goals="[
        {
          title: 'test',
          value: '20',
          progress: '20',
          change: '+12%',
          subtitle: 'This is a sub',
          deleteLink: '#',
        },
        {
          title: 'this is also',
          value: '35',
          progress: '35',
          change: '-52%',
          subtitle: 'This is another',
          deleteLink: '#2',
        },
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import GoalRows from "@/components/GoalRows.vue";
import Nav from "@/components/Nav.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    GoalRows,
  },
});
</script>
