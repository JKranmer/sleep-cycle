const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export default {
  [INCREMENT](state: any, value: number) {
    state.counter += value;
  },
  [DECREMENT](state: any, value: number) {
    state.counter -= value;
  },
};
