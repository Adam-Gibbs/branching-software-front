<template>
  <Progress value="100" />
  <Title
    title="Add new Goal"
    description="Name and define your goal"
    icon="medal"
  />
  <div class="flex flex-wrap -mx-3 w-full px-3 mb-6">
    <Text
      title="Name of Goal"
      placeholder="Reduce Carbon Emissions to 200kg per year"
      ref="name"
      :value="values.name"
      :required="true"
      @empty="addEmpty('name')"
    />
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 items-center">
      <Dropdown
        title="Monitored Value"
        :options="[
          'Assets Nearing EOL',
          'Average Time Between Actions',
          'Days Since Last Action',
          'Difference to Target Estimate',
          'Number of Ongoing Projects',
          'Possible Daily Savings',
          'Registered Assets',
          'Total Assets Replaced',
          'Total Carbon Emissions',
        ]"
        ref="type"
        :value="values.type"
        :required="true"
        @empty="addEmpty('type')"
      />
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 items-center">
      <Number
        title="Target value"
        placeholder="200"
        ref="targetValue"
        :value="values.targetValue"
        :required="true"
        @empty="addEmpty('targetValue')"
      />
    </div>
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
import Number from "@/components/wizard/Number.vue";
import Dropdown from "@/components/wizard/Dropdown.vue";
import Buttons from "@/components/wizard/Buttons.vue";

export default defineComponent({
  components: {
    Progress,
    Title,
    Text,
    Number,
    Dropdown,
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
      this.$refs.type.checkEmpty();
      this.$refs.targetValue.checkEmpty();
    },
    getValues() {
      return {
        name: this.$refs.name.getValue(),
        type: this.$refs.type.getValue(),
        targetValue: this.$refs.targetValue.getValue(),
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
      first: true,
      last: true,
      emptyFields: [],
    };
  },
});
</script>
