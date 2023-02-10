<template>
  <div class="resume">
    <div class="resume__item resume__item--error">
      <div class="resume__item--label">Duração do sono:</div>
      <h2 class="resume__item--value" id="timeDuration">00:00</h2>
    </div>
    <div class="resume__item resume__item--regular">
      <div class="resume__item--label">Hora de <span>dormir</span></div>
      <h2 class="resume__item--value" id="timeStart">00:00</h2>
    </div>
    <div class="resume__item">
      <div class="resume__item--label" id="timeToUp">
        Tempo previsto para <span>acordar</span>:
      </div>
      <h2 class="resume__item--value">00:00</h2>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="sass" src="./_resume.scss"></style>
