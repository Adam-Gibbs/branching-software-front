<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="drafting-compass"
      title="All Assets"
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
                <h3 class="text-xl font-bold">Assets List</h3>
                <p class="text-sm text-gray-500 font-medium">
                  List of all registered Assets
                </p>
              </div>
            </div>
            <div>
              <a
                class="inline-block cursor-pointer px-4 pb-2 text-green-main border-green-main text-sm font-medium border-b-2"
                >Assets</a
              >
            </div>
          </div>
          <div class="overflow-x-auto">
            <AllAssets :assetList="assets" :loading="loading" />
            <div class="py-4 text-center cursor-pointer">
              <button
                class="inline-flex items-center text-xs text-green-main hover:text-green-highlight font-medium"
              >
                <font-awesome-icon icon="arrow-down" class="w-5 h-5 mr-1" />
                <span>See more Assets</span>
              </button>
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
import Nav from "@/components/Nav.vue";
import Warning from "@/components/alerts/Warning.vue";
import AllAssets from "@/components/tables/All.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Warning,
    AllAssets,
  },
  data: () => ({
    loading: true,
    assets: [],
    warningList: Array<string>(),
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
