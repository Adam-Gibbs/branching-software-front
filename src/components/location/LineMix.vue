<template>
  <section class="pb-8">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -m-4">
        <HalfLine
          title="Proposal Responses in the past month"
          :yaxisData="[
            0, 9, 5, 10, 9, 2, 2, 8, 4, 5, 4, 3, 2, 5, 1, 10, 10, 4, 2, 0, 1, 2,
            7, 4, 7, 6, 0, 7, 11, 6,
          ]"
          subtitleA="Total"
          subtitleB="Qualifying Assets"
          valueA="146"
          valueB="78"
          changeA="+12%"
          changeB="-10%"
        />
        <div class="w-full lg:w-1/2 p-4">
          <QuarterProgress
            value="20kg"
            subtitle="Goal"
            title="CO<sup>2</sup>e reduced this month"
            progress="82"
          />
          <QuarterBar
            title="CO<sup>2</sup>e Output compared to last week"
            value="67kg"
            change="-4.3%"
            :dataA="[14, 11, 7, 9, 6, 15, 5]"
            dataNameA="Current Week"
            :dataB="[13, 9, 8, 15, 12, 7, 6]"
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
  components: {
    HalfLine,
    QuarterBar,
    QuarterProgress,
  },
});
</script>
