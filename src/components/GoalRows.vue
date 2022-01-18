<template>
  <delete
    v-for="item in deleteList"
    :deleteLink="item"
    :key="item"
    @removeDelete="removeDelete($event)"
  />
  <section class="py-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div v-for="goal in goals" :key="goal" class="w-full lg:w-1/2 p-4">
          <goal-item
            :change="goal.change"
            :subtitle="goal.subtitle"
            :progress="goal.progress"
            :title="goal.title"
            :value="goal.value"
            :deleteLink="goal.deleteLink"
            @addDelete="addDelete($event)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import GoalItem from "./GoalItem.vue";
import Delete from "@/components/alerts/Delete.vue";

export default defineComponent({
  components: { GoalItem, Delete },
  props: {
    goals: {
      type: Array,
      default: () => [],
    },
  },
  data: function () {
    return {
      deleteList: [],
    };
  },
  methods: {
    addDelete(link) {
      if (!this.deleteList.includes(link)) {
        this.deleteList.push(link);
      }
    },
    removeDelete(link) {
      this.deleteList.splice(this.deleteList.indexOf(link), 1);
    },
  },
});
</script>
