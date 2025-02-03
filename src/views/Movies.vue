<template>
  <h1 class="text-3xl font-bold">List of movies</h1>
  <div class="container">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup>
import { data } from "autoprefixer";
import { ref, onMounted } from "vue"; // Correction : "onMounted"
import MovieCard from "@/components/MovieCard.vue";

const url = "/database/db.json"; // Chez Vite, utilisez le chemin public
const movies = ref([]);

onMounted(() => {
  // Correction : syntaxe correcte
  fetch(url)
    .then((response) => response.json())
    .then((data) => (movies.value = data.movies)); // Accédez à la propriété "movies"
  console.log(data);
});
</script>
