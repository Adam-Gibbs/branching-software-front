<template>
  <Progress value="66" />
  <Title
    title="Asset Location and EOL Details"
    description="Details about the assets location and its estimated end of life."
    icon="compass"
  />
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full flex md:w-1/2 px-3 mb-6 md:mb-0 items-center">
      <add-dropdown
        title="Asset Location"
        :options="['A', 'B']"
        ref="location"
        :required="true"
        :value="values.location"
        @empty="addEmpty('location')"
      />
    </div>
    <div class="w-full flex md:w-1/2 px-3 mb-6 md:mb-0 items-center">
      <date-select
        title="Estimated End of Life"
        placeholder="XYZ Home Boiler"
        ref="eol"
        :required="true"
        :value="values.eol"
        @empty="addEmpty('eol')"
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
import AddDropdown from "@/components/wizard/AddDropdown.vue";
import DateSelect from "@/components/wizard/DateSelect.vue";
import Buttons from "@/components/wizard/Buttons.vue";

export default defineComponent({
  components: {
    Progress,
    Title,
    AddDropdown,
    DateSelect,
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
      this.$refs.location.checkEmpty();
      this.$refs.eol.checkEmpty();
      console.log(this.emptyFields);
    },
    getValues() {
      return {
        location: this.$refs.location.getValue(),
        eol: this.$refs.eol.getValue(),
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
      last: false,
      emptyFields: [],
    };
  },
});
</script>
