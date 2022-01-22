<template>
  <div class="w-full md:w-5/6">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    >
      {{ title }}
    </label>
    <select
      :disabled="disable"
      class="w-full block px-4 py-3 mb-2 text-sm bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white focus:border-gray-500 rounded"
      v-model="item"
      @blur="checkEmpty"
      :class="alert ? 'border-red-500' : 'border-gray-200'"
    >
      <option disabled selected></option>
      <option v-for="option in options" :key="option">
        {{ option }}
      </option>
    </select>
    <p v-show="alert" class="text-red-500 text-xs italic">
      Please fill out this field.
    </p>
  </div>
  <div class="w-full md:w-1/6">
    <button
      class="block self-start ml-3 bg-green-main px-2 py-1 rounded"
      :class="{ 'mt-4': !alert, 'hover:bg-green-highlight': !disable }"
      @click="emitAddPressed"
    >
      <font-awesome-icon icon="plus" class="h-4 w-4 text-gray-100" />
    </button>
  </div>
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
    disable: {
      type: Boolean,
      default: false,
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
    emitAddPressed() {
      this.$emit("add-pressed");
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
