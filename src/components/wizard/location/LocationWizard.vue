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
          @next="sendRequest"
          @previous="emitGoBack"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Warning from "@/components/alerts/Warning.vue";
import Page1 from "./Page1.vue";

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
    emitGoBack() {
      this.data = {};
      this.$emit("go-back");
    },
    sendRequest() {
      this.data = this.$refs.page1.getValues();
      this.loading = true;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("userId"),
          ...this.data,
        }),
      };
      fetch(process.env.VUE_APP_APIURL + "/v1/locations/add", requestOptions)
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (await !response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          this.loading = false;
          this.emitGoBack();
        })
        .catch(() => {
          this.addWarning("An error occurred, please retry");
          this.loading = false;
        });
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
