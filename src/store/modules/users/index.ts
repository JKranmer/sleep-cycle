import getters from "./getters";

export default {
  namespaced: true,
  state: () => ({
    first_name: "Jhonny",
    last_name: "Boy",
    email: "jhonny@boy.com",
  }),
  getters,
};
