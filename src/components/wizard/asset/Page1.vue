<template>
  <Progress value="33" />
  <Title
    title="Asset Description"
    description="Basic Details about the asset type and optional image"
    icon="tape"
  />
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3">
      <Text
        title="Asset Name"
        placeholder="Home Boiler"
        ref="name"
        :required="true"
        :value="values.name"
        :disable="disable"
        @empty="addEmpty('name')"
      />
    </div>
    <div class="w-full flex md:w-1/2 px-3 mb-6 md:mb-0 items-center">
      <add-dropdown
        title="Asset Type"
        link="/v1/asset-types/all"
        ref="type"
        :required="true"
        :value="values.type"
        :disable="disable"
        @empty="addEmpty('type')"
        @add-pressed="emitNewType"
        @addWarning="addWarning($event)"
        @removeWarning="removeWarning($event)"
      />
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3">
      <large-text
        title="Asset Description"
        placeholder="Information about the asset, to aid in identification"
        ref="description"
        :value="values.description"
        :disable="disable"
        @empty="addEmpty('description')"
      />
    </div>
    <div class="w-full flex md:w-1/2 px-3 mb-6 md:mb-0 items-center">
      <image-add
        title="Asset QR code"
        placeholder="Scan a QR code to link to this asset"
        ref="image"
        :value="values.image"
        :disable="disable"
        @empty="addEmpty('image')"
      />
    </div>
  </div>
  <Buttons
    :first="first"
    :last="last"
    :disable="disable"
    @next="emitNext"
    @previous="emitPrevious"
  />
</template>

<script>
import { defineComponent } from "vue";
import Progress from "@/components/wizard/Progress.vue";
import Title from "@/components/wizard/Title.vue";
import Text from "@/components/wizard/Text.vue";
import LargeText from "@/components/wizard/LargeText.vue";
import AddDropdown from "@/components/wizard/AddDropdown.vue";
import ImageAdd from "@/components/wizard/ImageAdd.vue";
import Buttons from "@/components/wizard/Buttons.vue";

export default defineComponent({
  components: {
    Progress,
    Title,
    Text,
    LargeText,
    AddDropdown,
    ImageAdd,
    Buttons,
  },
  props: {
    values: {
      type: Object,
      required: true,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    addWarning(text) {
      this.$emit("addWarning", text);
    },
    removeWarning(text) {
      this.$emit("removeWarning", text);
    },
    addEmpty(key) {
      if (!this.emptyFields.includes(key)) {
        this.emptyFields.push(key);
      }
    },
    checkEmpty() {
      this.emptyFields = [];
      this.$refs.name.checkEmpty();
      this.$refs.type.checkEmpty();
    },
    getValues() {
      return {
        name: this.$refs.name.getValue(),
        type: this.$refs.type.getValue(),
        description: this.$refs.description.getValue(),
        image: this.$refs.image.getValue(),
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
    emitNewType() {
      this.$emit("new-type");
    },
  },
  data() {
    return {
      first: true,
      last: false,
      emptyFields: [],
    };
  },
});
</script>
