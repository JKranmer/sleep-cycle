<template>
  <div class="resume__item" :class="setStatus">
    <div class="resume__item--label">{{ label }} - {{ testInject }}</div>
    <h2 class="resume__item--value">{{ valueText }}</h2>
  </div>
</template>
<script setup lang="ts">
import { computed, inject } from "vue";

const testInject = inject("test_provide");

const props = defineProps({
  label: {
    type: String,
  },
  valueText: {
    type: String,
  },
  status: {
    type: String,
    required: false,
  },
});

const setStatus = computed(() =>
  props.status ? "resume__item--" + props.status : ""
);
</script>
<style lang="scss" src="./_resume.scss"></style>
