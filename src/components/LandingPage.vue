<template>
  <div
    class="min-h-screen bg-backgroundGreen py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-s sm:mx-auto font-sans">
      <div
        class="absolute inset-0 bg-gradient-to-r from-startGrad to-endGrad shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:px-20 sm:py-10"
      >
        <div class="max-w-md mx-auto">
          <div>
            <img src="@/assets/default-long-dot.svg" class="sm:h-20" />
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <h1 class="text-2xl font-bold text-center">
                Currently Under Construction
              </h1>

              <p>
                To be the first to know about exciting new developments from
                Branching Software, click the link to sign up to updates.
              </p>
              <p>
                If you would like to read about the reasearch and ideas behind
                our new project please
                <a href="#" class="underline text-midGreen hover:text-green-700"
                  >read our white paper</a
                >
              </p>
            </div>
            <div
              class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7"
            >
              <Buttons
                v-show="!showSubscribe"
                @subscribeToggle="swapComponent"
              />
              <Subscribe
                v-show="showSubscribe"
                @subscribeToggle="swapComponent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Buttons from "./Buttons.vue";
import Subscribe from "./Subscribe.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      showSubscribe: false,
    };
  },
  components: {
    Buttons,
    Subscribe,
  },
  methods: {
    swapComponent() {
      this.showSubscribe = !this.showSubscribe;
    },
  },
});
</script>
