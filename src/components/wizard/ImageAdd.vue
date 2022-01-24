<template>
  <div class="w-full md:w-5/6">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    >
      {{ title }}
    </label>
    <input
      disabled
      class="appearance-none block w-full mb-2 bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      :class="alert ? 'border-red-500' : 'border-gray-200'"
      type="text"
      v-model="item"
      @blur="checkEmpty"
      :placeholder="placeholder"
    />
    <p v-show="alert" class="text-red-500 text-xs italic">
      Please fill out this field.
    </p>
  </div>
  <div class="w-full md:w-1/6">
    <button
      class="block self-start ml-3 bg-green-main px-2 py-1 rounded"
      :class="{ 'mt-4': !alert, 'hover:bg-green-highlight': !disable }"
    >
      <font-awesome-icon icon="camera" class="h-4 w-4 text-gray-100" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      required: true,
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
  },
  data() {
    return {
      item: this.value,
      alert: false,
    };
  },
});
</script>
