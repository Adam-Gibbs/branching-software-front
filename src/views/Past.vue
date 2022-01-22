<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="history"
      title="Past Year"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <TopBoxes />
    <LineWithData
      title="Assets replaced over past year"
      :xaxis="[
        '2018-01-19T00:00:00.000Z',
        '2018-02-01T00:00:00.000Z',
        '2018-02-24T00:00:00.000Z',
        '2018-03-14T00:00:00.000Z',
        '2018-05-26T00:00:00.000Z',
        '2018-06-05T00:00:00.000Z',
        '2018-09-09T00:00:00.000Z',
        '2018-10-16T00:00:00.000Z',
      ]"
      :yaxis="[100, 99, 98, 97, 96, 95, 94, 93]"
      dataName="Asset replacements"
      :boxData="[
        { name: 'Total assets replaced', value: '52' },
        { name: 'Total CO<sup>2</sup>e saved', value: '250kg' },
        { name: 'Number of affected locations', value: '38' },
        { name: 'Total cost', value: '$21,602,000' },
      ]"
    />
    <long-bar
      title="CO<sup>2</sup>e output each week of the last year"
      :xaxisData="[
        '2021-01-01T00:00:00.000Z',
        '2021-01-08T00:00:00.000Z',
        '2021-01-15T00:00:00.000Z',
        '2021-01-22T00:00:00.000Z',
        '2021-01-29T00:00:00.000Z',
        '2021-02-05T00:00:00.000Z',
        '2021-02-12T00:00:00.000Z',
        '2021-02-19T00:00:00.000Z',
        '2021-02-26T00:00:00.000Z',
        '2021-03-04T00:00:00.000Z',
        '2021-03-11T00:00:00.000Z',
        '2021-03-18T00:00:00.000Z',
        '2021-03-25T00:00:00.000Z',
        '2021-04-01T00:00:00.000Z',
        '2021-04-08T00:00:00.000Z',
        '2021-04-15T00:00:00.000Z',
        '2021-04-22T00:00:00.000Z',
        '2021-04-29T00:00:00.000Z',
        '2021-05-06T00:00:00.000Z',
        '2021-05-13T00:00:00.000Z',
        '2021-05-20T00:00:00.000Z',
        '2021-05-27T00:00:00.000Z',
        '2021-06-03T00:00:00.000Z',
        '2021-06-10T00:00:00.000Z',
        '2021-06-17T00:00:00.000Z',
        '2021-06-24T00:00:00.000Z',
        '2021-07-01T00:00:00.000Z',
        '2021-07-08T00:00:00.000Z',
        '2021-07-15T00:00:00.000Z',
        '2021-07-22T00:00:00.000Z',
        '2021-07-29T00:00:00.000Z',
        '2021-08-05T00:00:00.000Z',
        '2021-08-12T00:00:00.000Z',
        '2021-08-19T00:00:00.000Z',
        '2021-08-26T00:00:00.000Z',
        '2021-09-02T00:00:00.000Z',
        '2021-09-09T00:00:00.000Z',
        '2021-09-16T00:00:00.000Z',
        '2021-09-23T00:00:00.000Z',
        '2021-09-30T00:00:00.000Z',
        '2021-10-07T00:00:00.000Z',
        '2021-10-14T00:00:00.000Z',
        '2021-10-21T00:00:00.000Z',
        '2021-10-28T00:00:00.000Z',
        '2021-11-04T00:00:00.000Z',
        '2021-11-11T00:00:00.000Z',
        '2021-11-18T00:00:00.000Z',
        '2021-11-25T00:00:00.000Z',
        '2021-12-02T00:00:00.000Z',
        '2021-12-09T00:00:00.000Z',
        '2021-12-16T00:00:00.000Z',
        '2021-12-23T00:00:00.000Z',
        '2021-12-30T00:00:00.000Z',
      ]"
      :yaxisData="[
        300, 400, 200, 350, 500, 400, 300, 200, 100, 400, 500, 300, 400, 200,
        100, 300, 400, 200, 350, 500, 400, 300, 200, 100, 400, 500, 300, 400,
        200, 100, 250, 200, 350, 500, 400, 300, 200, 100, 400, 500, 300, 400,
        200, 100, 250, 200, 100, 250, 200, 100, 250, 400, 300,
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import TopBoxes from "@/components/past/TopBoxes.vue";
import LineWithData from "@/components/graphs/LineWithData.vue";
import LongBar from "@/components/graphs/LongBar.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    TopBoxes,
    LineWithData,
    LongBar,
  },
});
</script>
