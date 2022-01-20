<template>
  <section class="py-8">
    <div class="container px-4 mx-auto">
      <div class="p-6 bg-white shadow rounded">
        <page-1
          v-if="page === 1"
          ref="page1"
          :values="data"
          @next="getPage1('n')"
          @previous="getPage1('p')"
        />
        <page-2
          v-if="page === 2"
          ref="page2"
          :values="data"
          @next="getPage2('n')"
          @previous="getPage2('p')"
        />
        <page-3
          v-if="page === 3"
          ref="page3"
          :values="data"
          @next="getPage3('n')"
          @previous="getPage3('p')"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import Page1 from "@/components/wizard/add/Page1.vue";
import Page2 from "@/components/wizard/add/Page2.vue";
import Page3 from "@/components/wizard/add/Page3.vue";

export default defineComponent({
  components: {
    Page1,
    Page2,
    Page3,
  },
  methods: {
    handleForm() {
      this.data = {};
      this.page = 1;
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
        this.handleForm();
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
  data() {
    return {
      page: 1,
      data: {},
    };
  },
});
</script>
