import getters from "./getters";

export default {
  namespaced: true,
  state: () => ({
    posts: [
      { id: 1, title: "Hello" },
      { id: 2, title: "Bye" },
    ],
  }),
  getters,
};
