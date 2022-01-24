<template>
  <section class="py-12 bg-green-900 h-screen">
    <div class="container px-4 mx-auto">
      <div class="flex max-w-md mx-auto flex-col text-center">
        <img
          class="h-12 block my-10"
          src="@/assets/icon.svg"
          alt="Icon for Branching Software"
        />
        <div class="mt-12 mb-8 p-8 bg-white rounded">
          <span class="text-sm text-gray-600">Default Data</span>
          <h4 class="mb-6 text-3xl">Path To Zero</h4>
          <Warning
            v-for="item in warningList"
            :text="item"
            :key="item"
            @removeWarning="removeWarning($event)"
          />
          <p class="text-gray-600 my-4">
            It is recommended to add some dummy data before viewing the demo.
            The dashboard is suited to showing large amounts of historical data
            and thus starting fresh will not give the full experience and some
            features will be unavailable.
          </p>
          <div class="w-full flex">
            <button
              class="w-1/2 p-3 m-2 text-center flex justify-center items-center text-green-main font-semibold leading-none border-2 border-green-main bg-white rounded"
              @click="next"
              :disabled="loading"
              :class="{ 'hover:bg-green-light': !loading }"
            >
              No
            </button>
            <button
              class="w-1/2 p-3 m-2 text-center flex justify-center items-center text-white font-semibold leading-none bg-green-main hover:bg-green-highlight rounded"
              @click.prevent="sendRequest('/v1/seed/user')"
            >
              <p v-show="!loading">Yes</p>
              <font-awesome-icon
                icon="fan"
                class="h-4 w-4 animate-spin"
                v-show="loading"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
import { defineComponent } from "vue";
import Warning from "@/components/alerts/Warning";

export default defineComponent({
  components: {
    Warning,
  },
  data() {
    return {
      warningList: [],
      loading: false,
    };
  },
  methods: {
    next() {
      router.push({
        name: "Location Stats",
      });
    },
    sendRequest(link) {
      this.loading = true;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          number: link === "/v1/seed/assets" ? 12 : 4,
        }),
      };
      fetch(process.env.VUE_APP_APIURL + link, requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          if (link === "/v1/seed/assets") {
            this.loading = false;
            this.next();
          } else if (link === "/v1/seed/goals") {
            this.sendRequest("/v1/seed/assets");
          } else {
            console.log(data);
            localStorage.setItem("hasPast", true);
            this.sendRequest("/v1/seed/goals");
          }
        })
        .catch((e) => {
          console.log(e);
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
    },
    addWarning(text) {
      if (!this.warningList.includes(text)) {
        this.warningList.push(text);
      }
    },
    removeWarning(text) {
      this.warningList.splice(this.warningList.indexOf(text), 1);
    },
  },
});
</script>
