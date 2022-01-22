<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="plus"
      title="Add Asset"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <asset-type-wizard v-if="showType" />
    <location-wizard v-if="showLocation" @go-back="hideSubWizard" />
    <asset-wizard
      ref="assetWizard"
      @new-type="showAssetTypeWizard"
      @new-location="showLocationWizard"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import AssetTypeWizard from "@/components/wizard/asset_type/AssetTypeWizard.vue";
import LocationWizard from "@/components/wizard/location/LocationWizard.vue";
import AssetWizard from "@/components/wizard/asset/AssetWizard.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    AssetTypeWizard,
    LocationWizard,
    AssetWizard,
  },
  data() {
    return {
      showType: false,
      showLocation: false,
    };
  },
  methods: {
    showAssetTypeWizard() {
      this.showType = true;
    },
    showLocationWizard() {
      this.showLocation = true;
    },
    hideSubWizard() {
      this.showType = false;
      this.showLocation = false;
      this.$refs.assetWizard.reEnable();
    },
  },
});
</script>
