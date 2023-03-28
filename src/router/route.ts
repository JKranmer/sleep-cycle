import * as view from "../views";

// Lazy-loaded
const home = () => import(/* webpackChunName */ "../views/HomeView.vue");

export const routerArray = [
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
        path: "/vue-router",
        name: "vueRouterView",
        component: () => import("../views/vueXView.vue"),
      },
      {
        path: "/studing/:member(\\w+)?",
        name: "studingView",
        meta: { sidebar: true, auth: true },
        component: view.Studing,
        props: (route: any) => ({ member: route.params.member, color: "red" }),
        beforeEnter: (to: any, from: any, next: any) => {
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
];
