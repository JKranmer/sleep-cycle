<template>
  <span class="material-symbols-outlined">
    {{ icon }}
  </span>
</template>

<script lang="ts" setup>
defineProps({
  icon: {
    type: String,
  },
});
</script>
