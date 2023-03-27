import { createRouter, createWebHistory } from "vue-router";
import { routerArray } from "./route";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerArray,
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

// Gards Globais
// router.afterEach((to, from) => {
//   console.log("afterEach");
//   console.log("to", to);
//   console.log("from", from);
// });

const isLogged = false;

router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  console.log("to", to);
  console.log("from", from);
  if (to.meta.auth && !isLogged) {
    next({ name: "home" });
  }
  next();
});

export default router;
