<template>
  <div class="w-full">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    >
      {{ title }}
    </label>
    <div class="relative">
      <div
        class="flex absolute inset-y-0 right-0 items-center pr-10 pointer-events-none"
      >
        <font-awesome-icon
          icon="calendar-day"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
        />
      </div>
      <input
        class="appearance-none block w-full mb-2 bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        :class="alert ? 'border-red-500' : 'border-gray-200'"
        type="date"
        v-model="item"
        @blur="checkEmpty"
        :placeholder="placeholder"
      />
    </div>
    <p v-show="alert" class="text-red-500 text-xs italic">
      Please fill out this field.
    </p>
  </div>
</template>

<script>
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
