<template>
  <delete
    v-for="item in deleteList"
    :deleteLink="item"
    :key="item"
    @removeDelete="removeDelete($event)"
  />
  <section class="py-8">
    <div class="container px-4 mx-auto">
      <add-button class="mb-4" title="Add New Goals" link="/goals/add" />
      <div class="flex flex-wrap -m-4">
        <div v-for="goal in goals" :key="goal" class="w-full lg:w-1/2 p-4">
          <goal-item
            :change="randomChar() + random(1, 20).toString() + '%'"
            :subtitle="goal.type"
            :progress="random(0, 100)"
            :title="goal.name"
            :value="goal.targetValue"
            :id="goal.id"
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
import AddButton from "@/components/AddButton.vue";

export default defineComponent({
  components: { GoalItem, Delete, AddButton },
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
    random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    randomChar() {
      const chars = "+-";
      return chars.charAt(Math.floor(Math.random() * chars.length));
    },
    addDelete(id) {
      if (!this.deleteList.includes(id)) {
        this.deleteList.push({ link: "/v1/goals/delete", id: id });
      }
    },
    removeDelete(link) {
      this.deleteList.splice(this.deleteList.indexOf(link), 1);
    },
  },
});
</script>
