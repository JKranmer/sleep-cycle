<template>
  <div class="range">
    <label for="qt-cicle" class="range--group"
      >Quantidade ciclo do sono
      <span class="range--value" id="respostaRange">{{ qtCycle }}</span>
    </label>
    <div>
      <input
        v-model.number="qtCycle"
        @change="changeQt()"
        type="range"
        id="qt-cicle"
        min="1"
        max="9"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const qtCycle = ref(5);
const emit = defineEmits(["getQtCycle"]);

const changeQt = (): void => {
  emit("getQtCycle", qtCycle.value);
};
</script>
<style lang="sass" src="./_range.scss"></style>
