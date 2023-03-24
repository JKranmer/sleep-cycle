import { createRouter, createWebHistory } from "vue-router";
import * as view from "../views";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: view.Home,
    },
    {
      path: "/detail-view",
      name: "detailView",
      component: view.Detail,
      children: [
        {
          path: "/about",
          name: "aboutView",
          component: view.About,
        },
        {
          path: "/curiosity",
          name: "curiosityView",
          component: view.Curiosity,
        },
        {
          path: "/studing/:member(\\w+)?",
          name: "studingView",
          meta: { sidebar: true },
          component: view.Studing,
          props: (route) => ({ member: route.params.member, color: "red" }),
          beforeEnter: (to, from, next) => {
            console.log(to);
            console.log(from);
            next();
          },
        },
        {
          path: "/:pathMatch(.*)",
          name: "notFouldView",
          component: view.NotFould,
        },
      ],
    },
  ],
});

export default router;
