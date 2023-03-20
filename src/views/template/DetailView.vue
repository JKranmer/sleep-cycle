<template>
  <v-Container>
    <router-link to="/" class="link">Voltar</router-link>
    <slot><router-view /></slot>
  </v-Container>
</template>

<style lang="scss" scoped>
.container > a {
  margin-top: 1rem;
}
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import VContainer from "@/components/VContainer/VContainer.vue";
</script>
