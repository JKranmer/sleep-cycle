import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/style/sass/main.scss";

const app = createApp(App);

app.use(router);

app.mount("#app");
