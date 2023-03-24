<template>
  <v-Container>
    <span @click="goBack" class="link">Voltar</span>
    <slot><router-view /></slot>
  </v-Container>
</template>

<style lang="scss" scoped>
.container > a {
  margin-top: 1rem;
}
</style>

<script setup lang="ts">
import { RouterView } from "vue-router";
import VContainer from "@/components/VContainer/VContainer.vue";
import router from "@/router";

const goBack = () => {
  router.go(-1);
};
</script>
