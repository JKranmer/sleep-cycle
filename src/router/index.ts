import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/template/DetailView.vue"),
      children: [
        {
          path: "",
          name: "AboutView",
          component: () => import("../views/AboutView.vue"),
        },
      ],
    },
    {
      path: "/curiosity",
      name: "curiosity",
      component: () => import("../views/template/DetailView.vue"),
      children: [
        {
          path: "",
          name: "CuriosityView",
          component: () => import("../views/CuriosityView.vue"),
        },
      ],
    },
    {
      path: "/studing",
      name: "studing",
      component: () => import("../views/template/DetailView.vue"),
      children: [
        {
          path: "",
          name: "CuriosityView",
          component: () => import("../views/StudingView.vue"),
        },
      ],
    },
  ],
});

export default router;
