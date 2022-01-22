<template>
  <Warning
    v-for="item in warningList"
    :text="item"
    :key="item"
    @removeWarning="removeWarning($event)"
  />
  <Delete
    v-for="item in deleteList"
    :deleteLink="item"
    :key="item"
    @removeDelete="removeDelete($event)"
    @addWarning="addWarning($event)"
  />
  <section class="pb-8">
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
import Warning from "@/components/alerts/Warning.vue";
import Delete from "@/components/alerts/Delete.vue";
import AddButton from "@/components/AddButton.vue";

export default defineComponent({
  components: { GoalItem, Delete, AddButton, Warning },
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
    addWarning(text) {
      if (!this.warningList.includes(text)) {
        this.warningList.push(text);
      }
    },
    removeWarning(text) {
      this.warningList.splice(this.warningList.indexOf(text), 1);
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
