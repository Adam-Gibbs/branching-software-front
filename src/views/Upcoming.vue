<template>
  <Nav />
  <div class="mx-auto lg:ml-80">
    <Header
      icon="exchange-alt"
      title="Upcoming Asset Replacements"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              commodo purus."
    />
    <section class="py-8">
      <div class="container px-4 mx-auto">
        <div class="pt-4 bg-white shadow rounded">
          <div class="px-6 border-b border-blue-50">
            <div class="flex flex-wrap items-center mb-4">
              <div>
                <h3 class="text-xl font-bold" v-if="!completed">
                  Assets due Replacement
                </h3>
                <h3 class="text-xl font-bold" v-if="completed">
                  Assets Replaced
                </h3>
                <p class="text-sm text-gray-500 font-medium" v-if="!completed">
                  List of Assets close to their estimated end of life (EOL)
                </p>
                <p class="text-sm text-gray-500 font-medium" v-if="completed">
                  List of Assets who have passed their estimated end of life
                  (EOL)
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
                >Upcoming</a
              ><a
                class="inline-block cursor-pointer px-4 pb-2 text-sm font-medium border-b-2"
                :class="{
                  'text-green-main border-green-main': completed,
                  'text-gray-400 border-transparent hover:border-gray-400':
                    !completed,
                }"
                @click="completed = true"
                >Completed</a
              >
            </div>
          </div>
          <div class="overflow-x-auto">
            <Upcoming
              v-if="!completed"
              :assetList="[
                {
                  name: 'my Name',
                  id: '1',
                  description: 'a desc',
                  location: 'Here',
                  co2: '200',
                  eol: '2022-02-12',
                  addedOn: '2022-02-12',
                },
              ]"
            />
            <Completed
              v-if="completed"
              :assetList="[
                {
                  name: 'my Name',
                  id: '2',
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
import Upcoming from "@/components/tables/Upcoming.vue";
import Completed from "@/components/tables/Completed.vue";
import Nav from "@/components/Nav.vue";

export default defineComponent({
  components: {
    Nav,
    Header,
    Upcoming,
    Completed,
  },
  data: () => ({
    completed: false,
  }),
});
</script>
