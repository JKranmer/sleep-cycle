<template>
  <div v-for="(opt, index) in opts" :key="index" class="radio-group">
    <input
      type="radio"
      :id="opt.name"
      v-model="questionData"
      @change="changeQuestion"
      :value="opt.value"
    />
    <label :for="opt.name">{{ opt.label }}</label>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface IOpt {
  name: string;
  value: string;
  label: string;
}

defineProps({
  opts: {
    type: Array<IOpt>,
    default: () => [],
  },
});

const questionData = ref();

const emit = defineEmits(["update:question"]);

const changeQuestion = (): void => {
  emit("update:question", questionData.value);
};
</script>
<style lang="scss" scoped>
.radio-group {
  display: flex;
  align-items: center;
}
</style>
