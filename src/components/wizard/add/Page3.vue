<template>
  <Progress value="100" />
  <Title
    title="Asset CO2 Emissions"
    description="Details about the assets estimated CO2 emissions."
    icon="smog"
  />
  <Number
    title="Yearly Asset Emissions (kg)"
    placeholder="250"
    ref="co2"
    :required="true"
    :value="values.co2"
    @empty="addEmpty('co2')"
  />
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
import Number from "@/components/wizard/Number.vue";
import Buttons from "@/components/wizard/Buttons.vue";

export default defineComponent({
  components: {
    Progress,
    Title,
    Buttons,
    Number,
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
      this.$refs.co2.checkEmpty();
      console.log(this.emptyFields);
    },
    getValues() {
      return {
        co2: this.$refs.co2.getValue(),
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
