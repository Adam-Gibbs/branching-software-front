<template>
  <BurgerButton />
  <div class="hidden lg:block navbar-menu relative z-50">
    <div
      class="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"
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
            width="auto"
        /></a>
      </div>
      <div class="px-4 pb-6">
        <h3 class="mb-2 text-xs uppercase text-gray-400 font-medium">
          DASHBOARD
        </h3>
        <ul class="mb-8 text-sm font-medium">
          <Link title="Overview" image="nav/Overview.svg" path="/" />
          <Link title="Past Year" image="nav/Past.svg" path="/past" />
          <Link title="Current Stats" image="nav/Current.svg" path="/current" />
          <Link
            title="Future Predictions"
            image="nav/Future.svg"
            path="/future"
          />
          <Link title="Goals" image="nav/Goals.svg" path="/goals" />
        </ul>
        <h3 class="mb-2 text-xs uppercase text-gray-400 font-medium">
          Secondary
        </h3>
        <ul class="text-sm font-medium">
          <Link title="Support" image="nav/Support.svg" path="/support" />
          <Link title="Inbox" image="nav/Inbox.svg" path="/inbox" />
          <Link title="File Manager" image="nav/File.svg" path="/files" />
          <Link title="Data List" image="nav/Data.svg" path="/data" />
        </ul>
        <div class="pt-8">
          <ul>
            <Link
              title="Settings"
              image="general/Settings.svg"
              path="/settings"
            />
            <Link
              title="Log out"
              image="nav/Out.svg"
              background="red"
              path="/logout"
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
});
</script>
