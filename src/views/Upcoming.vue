<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="exchange-alt"
      title="Upcoming Asset Replacements"
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
    <section class="pb-8">
      <div class="container px-4 mx-auto">
        <div class="pt-4 bg-white shadow rounded">
          <div class="px-6 border-b border-blue-50">
            <div class="flex flex-wrap items-center mb-4">
              <div>
                <h3 class="text-xl font-bold" v-if="!completedTab">
                  Assets due Replacement
                </h3>
                <h3 class="text-xl font-bold" v-if="completedTab">
                  Assets Replaced
                </h3>
                <p
                  class="text-sm text-gray-500 font-medium"
                  v-if="!completedTab"
                >
                  List of Assets with less than 3 months to their estimated end
                  of life (EOL)
                </p>
                <p
                  class="text-sm text-gray-500 font-medium"
                  v-if="completedTab"
                >
                  List of Assets who have passed their estimated end of life
                  (EOL)
                </p>
              </div>
            </div>
            <div>
              <a
                class="inline-block cursor-pointer px-4 pb-2 text-sm font-medium border-b-2"
                :class="{
                  'text-green-main border-green-main': !completedTab,
                  'text-gray-400 border-transparent hover:border-gray-400':
                    completedTab,
                }"
                @click="completedTab = false"
                >Upcoming</a
              ><a
                class="inline-block cursor-pointer px-4 pb-2 text-sm font-medium border-b-2"
                :class="{
                  'text-green-main border-green-main': completedTab,
                  'text-gray-400 border-transparent hover:border-gray-400':
                    !completedTab,
                }"
                @click="completedTab = true"
                >Completed</a
              >
            </div>
          </div>
          <div class="overflow-x-auto">
            <Upcoming
              v-if="!completedTab"
              :assetList="assets"
              :loading="loading"
            />
            <Completed
              v-if="completedTab"
              :assetList="assets"
              :loading="loading"
            />
            <div class="py-4 text-center cursor-pointer">
              <a
                class="inline-flex items-center text-xs text-green-main hover:text-green-highlight font-medium"
              >
                <font-awesome-icon icon="arrow-down" class="w-5 h-5 mr-1" />
                <span>See more Assets</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Upcoming from "@/components/tables/Upcoming.vue";
import Completed from "@/components/tables/Completed.vue";
import Nav from "@/components/Nav.vue";
import Warning from "@/components/alerts/Warning.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Warning,
    Upcoming,
    Completed,
  },
  data: () => ({
    completedTab: false,
    warningList: Array<string>(),
    loading: true,
    assets: Array<any>(),
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
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
        }),
      };
      fetch(process.env.VUE_APP_APIURL + "/v1/assets/all", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (await !response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          this.loading = false;
          this.assets = data.result;
        })
        .catch(() => {
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
    },
  },
});
</script>
