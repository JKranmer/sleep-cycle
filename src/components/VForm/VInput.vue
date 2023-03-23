<template>
  <input
    type="text"
    :placeholder="placeholderText"
    v-model="questionData"
    @change="changeQuestion"
  />
  {{ questionData }}
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  placeholderText: {
    type: String,
    default: "",
  },
});

const questionData = ref();

const emit = defineEmits(["update:question"]);

const changeQuestion = (): void => {
  emit("update:question", questionData.value);
};
</script>
