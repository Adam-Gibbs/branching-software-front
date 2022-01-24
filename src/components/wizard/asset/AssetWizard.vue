<template>
  <Warning
    class="container mb-4 mx-auto"
    v-for="item in warningList"
    :text="item"
    :key="item"
    @removeWarning="removeWarning($event)"
  />
  <section class="pb-8" :class="{ 'blur-sm': disable }">
    <div class="container px-4 mx-auto">
      <div class="p-6 bg-white shadow rounded">
        <page-1
          v-if="page === 1"
          ref="page1"
          :values="data"
          :disable="disable"
          @next="getPage1('n')"
          @previous="getPage1('p')"
          @new-type="showNewType"
          @addWarning="addWarning($event)"
          @removeWarning="removeWarning($event)"
        />
        <page-2
          v-if="page === 2"
          ref="page2"
          :values="data"
          :disable="disable"
          @next="getPage2('n')"
          @previous="getPage2('p')"
          @new-location="showNewLocation"
          @addWarning="addWarning($event)"
          @removeWarning="removeWarning($event)"
        />
        <page-3
          v-if="page === 3"
          ref="page3"
          :values="data"
          :loading="loading"
          @next="getPage3('n')"
          @previous="getPage3('p')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Warning from "@/components/alerts/Warning.vue";
import Page1 from "./Page1.vue";
import Page2 from "./Page2.vue";
import Page3 from "./Page3.vue";

export default defineComponent({
  components: {
    Warning,
    Page1,
    Page2,
    Page3,
  },
  data() {
    return {
      page: 1,
      data: {},
      warningList: [],
      loading: false,
      disable: false,
    };
  },
  methods: {
    addWarning(text) {
      if (!this.warningList.includes(text)) {
        this.warningList.push(text);
      }
    },
    removeWarning(text) {
      this.warningList.splice(this.warningList.indexOf(text), 1);
    },
    showNewType() {
      this.disable = true;
      this.$emit("new-type");
    },
    showNewLocation() {
      this.disable = true;
      this.$emit("new-location");
    },
    reEnable() {
      this.disable = false;
    },
    success() {
      this.data = {};
      this.page = 1;
    },
    sendRequest() {
      this.loading = true;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          ...this.data,
          eol: Date.parse(this.data.eol),
        }),
      };
      fetch(process.env.VUE_APP_APIURL + "/v1/assets/add", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (await !response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          this.loading = false;
          this.success();
        })
        .catch(() => {
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
    },
    getPage1(to) {
      this.data = { ...this.data, ...this.$refs.page1.getValues() };
      if (to === "n") {
        this.next();
      }
    },
    getPage2(to) {
      this.data = { ...this.data, ...this.$refs.page2.getValues() };
      if (to === "n") {
        this.next();
      } else {
        this.previous();
      }
    },
    getPage3(to) {
      this.data = { ...this.data, ...this.$refs.page3.getValues() };
      if (to === "n") {
        this.sendRequest();
      } else {
        this.previous();
      }
    },
    next() {
      this.page += 1;
    },
    previous() {
      this.page -= 1;
    },
  },
});
</script>
