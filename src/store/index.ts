import { createStore } from "vuex";
import users from "./modules/users";
import counter from "./modules/counter";
import posts from "./modules/posts";
const store = createStore({
  // deixa apenas mudar o state pelas mutations
  strict: true,
  modules: {
    users,
    counter,
    posts,
  },
  state() {
    return {};
  },
});

export default store;
