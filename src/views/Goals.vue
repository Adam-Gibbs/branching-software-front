<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="medal"
      title="Goals"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <Warning
      class="container mb-4 mx-auto"
      v-for="item in warningList"
      :text="item"
      :key="item"
      @removeWarning="removeWarning($event)"
    />
    <GoalRows
      :goals="goals"
      v-if="!loading || goals.length > 0"
      @reload="sendRequest"
    />
    <section class="pb-8" v-if="loading && goals.length === 0">
      <div class="container px-4 mx-auto">
        <font-awesome-icon
          icon="fan"
          class="text-green-main text-center h-16 w-16 animate-spin flex justify-center items-center py-3"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import GoalRows from "@/components/GoalRows.vue";
import Nav from "@/components/Nav.vue";
import Warning from "@/components/alerts/Warning.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Warning,
    GoalRows,
  },
  data: () => ({
    warningList: Array<string>(),
    loading: false,
    goals: Array<any>(),
  }),
  mounted() {
    this.$nextTick(function () {
      this.sendRequest();
    });
  },
  methods: {
    addWarning(text: string) {
      if (!this.warningList.includes(text)) {
        this.warningList.push(text);
      }
    },
    removeWarning(text: string) {
      this.warningList.splice(this.warningList.indexOf(text), 1);
    },
    sendRequest() {
      console.log("hi");
      this.loading = true;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
        }),
      };
      fetch(process.env.VUE_APP_APIURL + "/v1/goals/all", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (await !response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          this.loading = false;
          this.goals = data.result;
        })
        .catch(() => {
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
    },
  },
});
</script>
