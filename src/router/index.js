import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Movies from "@/views/Movies.vue";
import NotFound from "@/views/NotFound.vue";
import MoviesDetails from "@/views/MoviesDetails.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/movies",
    component: Movies,
  },
  {
    path: "/movies/:id",
    component: MoviesDetails,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
