<template>
  <section
    class="relative bg-gradient-to-r from-startGrad to-endGrad background-animate overflow-hidden"
  >
    <Header />
    <div class="relative z-10 container mx-auto px-4">
      <div class="flex flex-wrap justify-center items-center pt-32">
        <TitleText />
        <TitleEmail />
        <img
          class="transform hover:scale-105 transition ease-in-out duration-1000 rounded-t-lg"
          src="@/assets/dash.png"
          alt=""
        />
      </div>
    </div>
    <img
      class="absolute bottom-0 left-0 w-full"
      src="@/assets/line.svg"
      alt=""
    />
  </section>
  <TitleFeatures />
  <TitleNewsletter />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Base/Header.vue";
import TitleText from "@/components/Title/Main/Text.vue";
import TitleEmail from "@/components/Title/Main/Email.vue";
import TitleFeatures from "@/components/Title/Feature/Features.vue";
import TitleNewsletter from "@/components/Title/Newsletter/Newsletter.vue";
import Footer from "@/components/Base/Footer.vue";

export default defineComponent({
  name: "Title",
  components: {
    Header,
    TitleText,
    TitleEmail,
    TitleFeatures,
    TitleNewsletter,
    Footer,
  },
});
</script>
