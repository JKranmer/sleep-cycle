import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import { INCREMENT, DECREMENT } from "./mutations";

import "./assets/style/sass/main.scss";

const store = createStore({
  // deixa apenas mudar o state pelas mutations
  strict: true,
  state() {
    return {
      first_name: "Jon",
      last_name: "Snow",
      email: "jon@snow.com",
      counter: 0,
      posts: [
        { id: 1, title: "Hello" },
        { id: 2, title: "Bye" },
      ],
    };
  },
  mutations: {
    [INCREMENT](state, value) {
      state.counter += value;
    },
    [DECREMENT](state, value) {
      state.counter -= value;
    },
  },
  actions: {
    counter({ commit }, { type, value }) {
      commit(type, value);
    },
  },
  getters: {
    fullName(state) {
      return `${state.first_name} ${state.last_name}`;
    },

    // getPostById(state) {
    //   return function (id) {
    //     return state.posts.find((o) => o.id == id);
    //   };
    // }, ou

    getPostById: (state) => (id: number) => {
      return state.posts.find((o) => o.id == id);
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");

console.log("===== > store");
console.log(store);
