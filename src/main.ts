import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style/sass/main.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");

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
