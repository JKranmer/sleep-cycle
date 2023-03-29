export default {
  getPostById(state: any) {
    return function (id: number) {
      return state.posts.find((o: any) => o.id == id);
    };
  },
  // ou
  // getPostById: (state) => (id: number) => {
  //   return state.posts.find((o) => o.id == id);
  // },
};
