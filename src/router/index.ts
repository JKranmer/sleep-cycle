import { createRouter, createWebHistory } from "vue-router";
import * as view from "../views";

const home = () => import(/* webpackChunName */ "../views/HomeView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
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
          meta: { sidebar: true, auth: true },
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
  // Para quando mudar de pagina puder controlar o scroll horizontal e vertical da página
  // parametros: to, from, savePosition
  scrollBehavior() {
    return {
      // Podendo pegar de acordo a um elemento
      // el: '#main',
      top: 0,
    };
  },
});

export default router;
