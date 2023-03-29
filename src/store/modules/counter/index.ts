import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state: () => ({
    counter: 0,
  }),
  mutations,
  actions,
};
