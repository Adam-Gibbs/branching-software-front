<template>
  <label
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="grid-last-name"
  >
    {{ title }}
  </label>
  <input
    class="appearance-none block w-full mb-2 bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    :class="alert ? 'border-red-500' : 'border-gray-200'"
    type="number"
    v-model="number"
    @blur="checkEmpty"
    :placeholder="placeholder"
  />
  <p v-show="alert" class="text-red-500 text-xs italic">
    Please fill out this field with a valid number.
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
      type: Number,
    },
  },
  methods: {
    checkEmpty() {
      if (this.required) {
        if (
          this.number === undefined ||
          Number.isInteger(this.number) === false
        ) {
          this.alert = true;
          this.$emit("empty");
        } else {
          this.alert = false;
        }
      }
    },
    getValue() {
      this.checkEmpty();
      return this.number;
    },
  },
  data() {
    return {
      number: this.value,
      alert: false,
      alertNumber: false,
      alertEmpty: false,
    };
  },
});
</script>
