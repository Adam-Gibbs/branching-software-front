<template>
  <li>
    <router-link
      class="flex items-center pl-3 py-3 pr-2 rounded-2xl"
      :class="
        currentRoute()
          ? `text-white bg-${background}-main`
          : `hover:bg-${background}-light text-gray-500`
      "
      :to="path"
    >
      <span class="inline-block mr-3">
        <!-- This is causing the XML errors -->
        <object
          class="text-gray-200 w-5 h-5"
          :data="require(`@/assets/${image}`)"
        >
          Icon for {{ title }}
        </object>
      </span>
      <span>{{ title }}</span>
      <span
        v-show="notification !== 0"
        class="flex justify-center items-center ml-auto w-6 h-6 text-white text-xs rounded-full bg-green-main"
        >{{ notification }}</span
      >
      <img
        v-show="notification === 0"
        class="flex justify-center items-center ml-auto w-3 h-3 text-white"
        src="@/assets/nav/Arrow.svg"
        alt="Arrow"
      />
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      default: "green",
    },
    notification: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    currentRoute: function () {
      // return true if current path equals path
      return this.$route.path === this.path;
    },
  },
});
</script>
