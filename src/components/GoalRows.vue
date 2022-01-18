<template>
  <section class="py-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="goal in goals" class="w-full lg:w-1/2 p-4">
          <goal-item
            :change="goal.change"
            :subtitle="goal.subtitle"
            :progress="goal.progress"
            :title="goal.title"
            :value="goal.value"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GoalItem from "./GoalItem.vue";

export default defineComponent({
  components: { GoalItem },
  props: {
    goals: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
