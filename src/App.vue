<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Path to Zero</title>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap"
      />
    </head>
    <body class="antialiased bg-body text-body font-body">
      <Nav />
      <router-view />
    </body>
  </html>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/components/Nav.vue";

export default defineComponent({
  name: "App",
  components: {
    Nav,
  },
});
</script>
