<template>
  <label
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-last-name"
  >
    {{ title }}
  </label>
  <input
    :disabled="disable"
    class="appearance-none block w-full mb-2 bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    :class="alert ? 'border-red-500' : 'border-gray-200'"
    type="text"
    v-model="text"
    @blur="checkEmpty"
    :placeholder="placeholder"
  />
  <p v-show="alert" class="text-red-500 text-xs italic">
    Please fill out this field.
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    checkEmpty() {
      if (this.required) {
        if (this.text === "") {
          this.alert = true;
          this.$emit("empty");
        } else {
          this.alert = false;
        }
      }
    },
    getValue() {
      this.checkEmpty();
      return this.text;
    },
  },
  data() {
    return {
      text: this.value,
      alert: false,
    };
  },
});
</script>
