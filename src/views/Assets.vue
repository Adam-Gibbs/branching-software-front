<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="drafting-compass"
      title="All Assets"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <section class="py-8">
      <div class="container px-4 mx-auto">
        <div class="pt-4 bg-white shadow rounded">
          <div class="px-6 border-b border-blue-50">
            <div class="flex flex-wrap items-center mb-4">
              <div>
                <h3 class="text-xl font-bold">Assets List</h3>
                <p class="text-sm text-gray-500 font-medium">
                  List of all registered Assets
                </p>
              </div>
            </div>
            <div>
              <a
                class="inline-block cursor-pointer px-4 pb-2 text-sm font-medium border-b-2"
                :class="{
                  'text-green-main border-green-main': !completed,
                  'text-gray-400 border-transparent hover:border-gray-400':
                    completed,
                }"
                @click="completed = false"
                >Assets</a
              >
            </div>
          </div>
          <div class="overflow-x-auto">
            <AllAssets
              :assetList="[
                {
                  name: 'my Name',
                  description: 'a desc',
                  location: 'Here',
                  co2: '200',
                  eol: '2022-02-12',
                  addedOn: '2022-02-12',
                },
              ]"
            />
            <div class="py-4 text-center cursor-pointer">
              <a
                class="inline-flex items-center text-xs text-green-main hover:text-green-highlight font-medium"
              >
                <font-awesome-icon icon="arrow-down" class="w-5 h-5 mr-1" />
                <span>See more Assets</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import AllAssets from "@/components/tables/All.vue";

export default defineComponent({
  name: "App",
  components: {
    Nav,
    Header,
    AllAssets,
  },
});
</script>
