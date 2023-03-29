export default {
  counter(context: any, payload: { type: string; value: number }) {
    context.commit(payload.type, payload.value);
  },
};
