<template>
  <RouterLink :to="`/movies/${movie.id}`">
    <div class="container mx-2 my-2">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="movie.poster" :alt="movie.title" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#photography</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#{{ movie.year }}</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#{{ movie.runtime }}</span
          >
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  movie: Object,
});
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
</style>
