<template>
  <section class="pb-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-4">
        <HalfLine
          title="Proposal Responses in the past month"
          :yaxisData="data.halfline.yaxis"
          subtitleA="Total"
          subtitleB="Qualifying Assets"
          :valueA="data.halfline.valueA"
          :valueB="data.halfline.valueB"
          :changeA="data.halfline.changeA"
          :changeB="data.halfline.changeB"
        />
        <div class="w-full lg:w-1/2 p-4">
          <QuarterProgress
            :value="data.quarterProgress.value"
            subtitle="Goal"
            title="CO<sup>2</sup>e reduced this month"
            :progress="data.quarterProgress.progress"
          />
          <QuarterBar
            title="CO<sup>2</sup>e Output compared to last week"
            :value="data.quarterBar.value"
            :change="data.quarterBar.change"
            :dataA="data.quarterBar.dataA"
            dataNameA="Current Week"
            :dataB="data.quarterBar.dataB"
            dataNameB="Past Week"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HalfLine from "@/components/graphs/HalfLine.vue";
import QuarterBar from "@/components/graphs/QuarterBar.vue";
import QuarterProgress from "@/components/graphs/QuarterProgress.vue";

export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  components: {
    HalfLine,
    QuarterBar,
    QuarterProgress,
  },
});
</script>
