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
      @click="toggleOpen()"
    >
      <span class="inline-block mr-3">
        <font-awesome-icon
          :icon="icon"
          class="w-5 h-5"
          :class="{
            'text-gray-400': !currentRoute(),
            'text-white': currentRoute(),
          }"
        />
      </span>
      <span>{{ title }}</span>
      <span
        v-show="notification !== 0"
        class="flex justify-center items-center ml-auto w-6 h-6 text-white text-xs rounded-full bg-green-main"
        >{{ notification }}</span
      >
      <font-awesome-icon
        icon="chevron-right"
        class="flex justify-center items-center ml-auto w-4 h-4"
        :class="{
          'text-gray-400': !currentRoute(),
          'text-white': currentRoute(),
        }"
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
    icon: {
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
      return this.$route.path.includes(this.path);
    },
    toggleOpen: function () {
      this.$emit("toggleOpen", true);
    },
  },
});
</script>
