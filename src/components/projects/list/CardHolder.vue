<template>
  <section class="py-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div
          class="sm:w-full p-4"
          v-show="!showProgress && !showFinished"
          :class="{ 'md:w-1/3': !showBacklog }"
        >
          <Title
            title="Backlog"
            colour="indigo"
            :count="backlog.length"
            @click="toggleBacklog"
          />
          <div class="">
            <Card
              v-for="project in backlog"
              :key="project"
              :project="project"
              @click="goTo(project.id)"
            />
          </div>
          <add-button />
        </div>
        <div
          class="sm:w-full hide p-4"
          v-show="!showBacklog && !showFinished"
          :class="{ 'md:w-1/3': !showProgress }"
        >
          <Title
            title="In Progress"
            colour="yellow"
            :count="progress.length"
            @click="toggleProgress"
          />
          <Card
            v-for="project in progress"
            :key="project"
            :project="project"
            @click="goTo(project.id)"
          />
          <add-button />
        </div>
        <div
          class="sm:w-full p-4"
          v-show="!showProgress && !showBacklog"
          :class="{ 'md:w-1/3': !showFinished }"
        >
          <Title
            title="Finished"
            colour="green"
            :count="finished.length"
            @click="toggleFinished"
          />
          <Card
            v-for="project in finished"
            :key="project"
            :project="project"
            @click="goTo(project.id)"
          />
          <add-button />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "@/components/projects/list/Title.vue";
import Card from "@/components/projects/list/Card.vue";
import AddButton from "@/components/projects/list/AddButton.vue";

export default defineComponent({
  components: {
    Title,
    Card,
    AddButton,
  },
  methods: {
    toggleBacklog() {
      this.showBacklog = !this.showBacklog;
    },
    toggleProgress() {
      this.showProgress = !this.showProgress;
    },
    toggleFinished() {
      this.showFinished = !this.showFinished;
    },
    goTo(id: string) {
      this.$router.push(`/projects/view/${id}`);
    },
  },
  data: function () {
    return {
      showBacklog: false,
      showProgress: false,
      showFinished: false,
      backlog: [
        {
          name: "Project 4",
          id: "4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non commodo purus.",
          assetType: "Vehicle",
          proposals: 0,
          replies: 2,
          accepted: 0,
        },
        {
          name: "Project 5",
          id: "5",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non commodo purus.",
          assetType: "CHP",
          proposals: 0,
          replies: 4,
          accepted: 0,
        },
        {
          name: "Project 6",
          id: "6",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non commodo purus.",
          assetType: "Powerplant",
          proposals: 0,
          replies: 1,
          accepted: 0,
        },
      ],
      progress: [
        {
          name: "Project 2",
          id: "2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non commodo purus.",
          assetType: "Powerplant",
          proposals: 2,
          replies: 16,
          accepted: 0,
        },
        {
          name: "Project 3",
          id: "3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non commodo purus.",
          assetType: "Transport",
          proposals: 6,
          replies: 24,
          accepted: 1,
        },
      ],
      finished: [
        {
          name: "Project 1",
          id: "1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non commodo purus.",
          assetType: "Vehicle",
          proposals: 14,
          replies: 35,
          accepted: 1,
        },
      ],
    };
  },
});
</script>
