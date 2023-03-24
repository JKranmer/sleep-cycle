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
import { onBeforeRouteLeave, RouterView, useRouter } from "vue-router";
import VContainer from "@/components/VContainer/VContainer.vue";
const router = useRouter();
const goBack = () => {
  router.go(-1);
};

onBeforeRouteLeave(async (to, from, next) => {
  console.log(to, "to");
  console.log(from, "from");
  next();
});
</script>
