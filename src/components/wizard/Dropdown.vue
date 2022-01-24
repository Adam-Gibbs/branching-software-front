<template>
  <label
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
  >
    {{ title }}
  </label>
  <select
    class="w-full block px-4 py-3 mb-2 text-sm bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white focus:border-gray-500 rounded"
    :class="alert ? 'border-red-500' : 'border-gray-200'"
    @blur="checkEmpty"
    v-model="item"
    :id="setId"
  >
    <option disabled selected></option>
    <option v-for="option in options" :key="option">
      {{ option }}
    </option>
  </select>
  <p v-show="alert" class="text-red-500 text-xs italic">
    Please fill out this field.
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    options: {
      type: Array,
      required: true,
    },
    title: {
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
    setId: {
      type: String,
      default: "",
    },
  },
  methods: {
    checkEmpty() {
      if (this.required) {
        if (this.item === "") {
          this.alert = true;
          this.$emit("empty");
        } else {
          this.alert = false;
        }
      }
    },
    getValue() {
      this.checkEmpty();
      return this.item;
    },
  },
  data() {
    return {
      item: this.value,
      alert: false,
    };
  },
});
</script>
