<template>
  <button :class="`btn--${status}`">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
defineProps<{
  status: string;
}>();
</script>
<style lang="sass" src="./_btn.scss"></style>
