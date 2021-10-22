<template>    
    <div class="m-4 flex">
        <button
        @click="subscribeToggle"
        class="
            bg-midGreen
            hover:bg-startGrad
            text-white text-center
            font-black
            px-4 py-2 mx-5
            rounded-full
            float-left
        "
        >
        Sign up for updates
        </button>
        <button
        class="
            bg-midGreen
            hover:bg-startGrad
            text-white text-center
            font-black
            px-4 py-2 mx-5
            rounded-full
            float-right
            "
        >
        Read our white paper
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  methods: {
      subscribeToggle() {
          this.$emit("subscribeToggle")
      }
  }
});
</script>
