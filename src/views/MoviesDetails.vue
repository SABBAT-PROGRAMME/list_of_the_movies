<template>
  <div>
    <!-- <h1>Movie {{ $route.params.title }} details page</h1> -->
    <h1>{{ queryMovie.title }}</h1>
  </div>

  <section class="bg-white dark:bg-gray-900 m-6 p-4">
    <div v-if="isLoading">Is Loading ...</div>
    <div
      v-else
      class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row"
    >
      <h3>Params: {{ $route.params.id }}</h3>
      <div class="flex justify-center xl:w-1/2">
        <img
          class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
          :src="queryMovie.poster"
          :alt="queryMovie.title"
        />
      </div>

      <div
        class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0"
      >
        <h2
          class="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white"
        >
          {{ queryMovie.title }}
        </h2>
        <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
          {{ queryMovie.year }}
        </span>
        <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
          {{ queryMovie.runtime }}
        </span>
      </div>
    </div>

    <div class="mt-10 flex items-center justify-center gap-x-6">
      <button
        @click="$router.back()"
        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go back Movies
      </button>
      <a href="#" class="text-sm font-semibold text-gray-900"
        >Contact support <span aria-hidden="true">&rarr;</span></a
      >
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const queryMovie = ref({});
const url = "/database/db.json";
const isLoading = ref(false);

onMounted(() => {
  const id = route.params.id;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      queryMovie.value = data.movies.find((movie) => movie.id == id);
    });

  if (!response.ok) {
    isLoading.value = false;
    throw new Error("Network response was not ok");
  }
});
</script>

<style></style>
