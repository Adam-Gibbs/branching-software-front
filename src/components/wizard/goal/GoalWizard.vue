<template>
  <Warning
    class="container px-4 mx-auto"
    v-for="item in warningList"
    :text="item"
    :key="item"
    @removeWarning="removeWarning($event)"
  />
  <section class="py-8">
    <div class="container px-4 mx-auto">
      <div class="p-6 bg-white shadow rounded">
        <page-1
          ref="page1"
          :values="data"
          @next="getPage1('n')"
          @previous="getPage1('p')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Warning from "@/components/alerts/Warning.vue";
import Page1 from "@/components/wizard/goal/Page1.vue";

export default defineComponent({
  components: {
    Warning,
    Page1,
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
    success() {
      this.data = {};
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
        this.sendRequest();
      }
    },
  },
  data() {
    return {
      data: {},
      warningList: [],
      loading: false,
    };
  },
});
</script>
