<template>
  <Progress value="100" />
  <Title
    title="Add new Asset Type"
    description="Create a new asset type"
    icon="sitemap"
  />
  <div class="mb-6">
    <Text
      title="Name of Type"
      placeholder="Gas Boiler"
      ref="name"
      :value="values.name"
      :required="true"
      @empty="addEmpty('name')"
    />
  </div>
  <Buttons
    :first="first"
    :last="last"
    @next="emitNext"
    @previous="emitPrevious"
  />
</template>

<script>
import { defineComponent } from "vue";
import Progress from "@/components/wizard/Progress.vue";
import Title from "@/components/wizard/Title.vue";
import Text from "@/components/wizard/Text.vue";
import Buttons from "@/components/wizard/Buttons.vue";

export default defineComponent({
  components: {
    Progress,
    Title,
    Text,
    Buttons,
  },
  props: {
    values: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addEmpty(key) {
      if (!this.emptyFields.includes(key)) {
        this.emptyFields.push(key);
      }
    },
    checkEmpty() {
      this.emptyFields = [];
      this.$refs.name.checkEmpty();
    },
    getValues() {
      return {
        name: this.$refs.name.getValue(),
      };
    },
    emitNext() {
      this.checkEmpty();
      if (this.emptyFields.length === 0) {
        this.$emit("next");
      }
    },
    emitPrevious() {
      this.$emit("previous");
    },
  },
  data() {
    return {
      first: false,
      last: true,
      emptyFields: [],
    };
  },
});
</script>
