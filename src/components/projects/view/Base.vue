<template>
  <section class="py-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4">
        <Details
          title="Details about Project"
          subtitle="Details about this project"
          name="NAME"
          :description="[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo omnis sint culpa incidunt excepturi voluptates minus accusantium tempora mollitia soluta vel error, molestias ipsam corrupti iusto sed maxime velit. Inventore!',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo omnis sint culpa incidunt excepturi voluptates minus accusantium tempora mollitia soluta vel error, molestias ipsam corrupti iusto sed maxime velit. Inventore!',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo omnis sint culpa incidunt excepturi voluptates minus accusantium tempora mollitia soluta vel error, molestias ipsam corrupti iusto sed maxime velit. Inventore!',
          ]"
          :showAccept="true"
        />
        <Curve />
        <Details
          title="Details about Project Submitter"
          subtitle="Details about the contractor who submitted this project"
          name="NAME"
          :description="[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo omnis sint culpa incidunt excepturi voluptates minus accusantium tempora mollitia soluta vel error, molestias ipsam corrupti iusto sed maxime velit. Inventore!',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo omnis sint culpa incidunt excepturi voluptates minus accusantium tempora mollitia soluta vel error, molestias ipsam corrupti iusto sed maxime velit. Inventore!',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo omnis sint culpa incidunt excepturi voluptates minus accusantium tempora mollitia soluta vel error, molestias ipsam corrupti iusto sed maxime velit. Inventore!',
          ]"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Details from "@/components/projects/view/Details.vue";
import Curve from "@/components/graphs/Curve.vue";

export default defineComponent({
  components: {
    Details,
    Curve,
  },
});
</script>
