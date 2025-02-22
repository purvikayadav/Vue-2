import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/pages/Home.vue";
import Home from "../pages/Home.vue";
// import About from "@/pages/About.vue";
import About from "../pages/About.vue";
// import NotFound from "@/pages/NotFound.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound } // Catch-all for 404
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
