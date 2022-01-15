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
        <a class="text-xl font-semibold" href="#">
          <img
            class="h-10"
            src="@/assets/icon.svg"
            alt="Icon for Branching Software"
        /></a>
      </div>
      <div class="px-4 pb-6">
        <h3 class="mb-2 text-xs uppercase text-gray-400 font-medium">
          DASHBOARD
        </h3>
        <ul class="mb-8 text-sm font-medium">
          <Link
            title="Overview"
            icon="infinity"
            path="/"
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
            icon="mouse-pointer"
            path="/current"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="Future Predictions"
            icon="bullseye"
            path="/future"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="Goals"
            icon="medal"
            path="/goals"
            @toggleOpen="toggleOpen($event)"
          />
        </ul>
        <h3 class="mb-2 text-xs uppercase text-gray-400 font-medium">
          Secondary
        </h3>
        <ul class="text-sm font-medium">
          <Link
            title="Support"
            image="nav/Support.svg"
            path="/support"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="Inbox"
            image="nav/Inbox.svg"
            path="/inbox"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="File Manager"
            image="nav/File.svg"
            path="/files"
            @toggleOpen="toggleOpen($event)"
          />
          <Link
            title="Data List"
            image="nav/Data.svg"
            path="/data"
            @toggleOpen="toggleOpen($event)"
          />
        </ul>
        <div class="pt-8">
          <ul>
            <Link
              title="Settings"
              image="general/Settings.svg"
              path="/settings"
              @toggleOpen="toggleOpen($event)"
            />
            <Link
              title="Log out"
              image="nav/Out.svg"
              background="red"
              path="/logout"
              @toggleOpen="toggleOpen($event)"
            />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
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
  },
});
</script>
