<template>
  <BurgerButton :open="open" @toggleOpen="toggleOpen($event)" />
  <div class="lg:block navbar-menu relative z-50" :class="{ hidden: open }">
    <div
      class="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"
      @click="toggleOpen(true)"
    ></div>
    <nav
      class="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto"
    >
      <div
        class="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-blue-50"
      >
        <a class="text-xl font-semibold" href="/">
          <img
            class="h-10"
            src="@/assets/icon.svg"
            alt="Icon for Branching Software"
          />
        </a>
      </div>
      <div class="px-4 pb-6">
        <h3 class="mb-2 text-xs uppercase text-gray-400 font-medium">
          Dashboard
        </h3>
        <ul class="mb-8 text-sm font-medium">
          <Link
            title="Overview"
            icon="infinity"
            path="/overview"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="Past Year"
            icon="history"
            path="/past"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="Current Stats"
            icon="bullseye"
            path="/current"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="Goals"
            icon="medal"
            path="/goals"
            @toggleOpen="toggleOpen($event)"
          />
        </ul>
        <h3 class="mb-2 text-xs uppercase text-gray-400 font-medium">Assets</h3>
        <ul class="text-sm font-medium mb-8">
          <Link
            title="Upcoming Assets"
            icon="exchange-alt"
            path="/upcoming"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="All Assets"
            icon="drafting-compass"
            path="/assets"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="Add Asset"
            icon="plus"
            path="/add"
            @toggleOpen="toggleOpen($event)"
          />
        </ul>
        <h3 class="mb-2 text-xs uppercase text-gray-400 font-medium">
          Projects
        </h3>
        <ul class="text-sm font-medium mb-8">
          <Link
            title="All Projects"
            icon="file-invoice"
            path="/projects"
            @toggleOpen="toggleOpen($event)"
          />
        </ul>
        <div>
          <ul>
            <Link
              title="Settings"
              icon="cog"
              path="/settings"
              @toggleOpen="toggleOpen($event)"
            />
            <Link
              title="Log out"
              icon="sign-out"
              background="red"
              path="/signin"
              @toggleOpen="signOut()"
            />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";
import Link from "./nav_components/Link.vue";
import BurgerButton from "./nav_components/BurgerButton.vue";

export default defineComponent({
  components: { Link, BurgerButton },
  data: function () {
    return {
      open: true,
    };
  },
  methods: {
    toggleOpen: function (newValue: boolean) {
      this.open = newValue;
    },
    signOut: function () {
      localStorage.removeItem("userId");
      router.push({
        name: "Sign In",
      });
    },
  },
});
</script>
