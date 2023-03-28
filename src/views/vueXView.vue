<template>
  <div>
    <h1>Teste</h1>
    <h3>{{ fullName }}</h3>
    <h3>{{ $_fullName }}</h3>
    <div>
      <span @click="decrement()">-</span>
      {{ counting }}
      <span @click="increment()">+</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "XView",
  setup() {
    return {};
  },

  created() {
    console.log(this.$_getPostById(2));
  },
  computed: {
    ...mapState({
      firstName: (state: any) => state.first_name,
      lastname: (state: any) => state.last_name,
      counting: (state: any) => state.counter,
    }),

    ...mapGetters({
      $_fullName: "fullName",
      $_getPostById: "getPostById",
    }),

    fullName() {
      return `${this.firstName} ${this.lastname}`;
    },
  },

  methods: {
    ...mapMutations(
      {
        // Boa praticas para saber que veio da store
        $_add: "INCREMENT",
        $_remove: "DECREMENT",
      }
      // or ["decrement", "increment"]
    ),

    ...mapActions(
      {
        $_counter: "counter",
      }
      // or ["counter"]
    ),
    decrement() {
      if (this.counting == 0) return;
      this.$_counter({ type: "DECREMENT", value: 100 });
      // this.$_remove(10);
      // this.$store.commit("decrement");
    },
    increment() {
      // this.$_add(10);
      this.$_counter({ type: "INCREMENT", value: 100 });

      // this.$store.commit("increment");
    },
  },
});
</script>

<style scoped></style>
