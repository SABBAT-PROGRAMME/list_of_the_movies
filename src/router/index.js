import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Movies from "@/views/Movies.vue";
import Download from "@/views/Download.vue";
import NotFound from "@/views/NotFound.vue";
import MoviesDetails from "@/views/MoviesDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/download",
    name: "Download",
    component: Download,
  },

  {
    path: "/movies/:id",
    name: "MoviesDetails",
    component: MoviesDetails,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
