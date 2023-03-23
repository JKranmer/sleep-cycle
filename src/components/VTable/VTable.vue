<template>
  <table class="table">
    <thead class="text-capitalize">
      <tr>
        <th>
          {{ EWord[start == 1 ? 0 : 1] }}
        </th>
        <th>Duração</th>
        <th>
          {{ EWord[start!] }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in arrayTimeBus" :key="index">
        <slot :item="item" :index="index">
          <td>{{ item.timeUp }}</td>
          <td>{{ item.duration }}</td>
          <td>{{ item.time }}</td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { EWord, type ITimeBus } from "@/views/SleepCycle";

defineProps({
  start: {
    type: Number,
  },
  arrayTimeBus: {
    type: Array<ITimeBus>,
  },
});
</script>
<style lang="scss">
.table {
  $background: v.$neutral-color-hight-pure;
  $background-tr: v.$neutral-color-hight-light;
  $border: v.$brand-color-feedback-regular;
  $text: v.$neutral-color-low-dark;

  @mixin colors-theme(
    $m-background: $background,
    $m-background-tr: $background-tr,
    $m-border: $border,
    $m-text: $text
  ) {
    border: solid 3px $border;
    background: $background;
    color: $text;
    tr:nth-child(2n + 2) {
      background: $background-tr;
    }
  }
  @include colors-theme();

  @include m.dark-theme() {
    $background: v.$neutral-color-black;
    $background-tr: v.$neutral-color-low-pure;
    $border: v.$brand-color-feedback-regular-dark;
    $text: v.$neutral-color-hight-medium;
    @include colors-theme();
  }

  @extend %shadow-level-1;
  width: 100%;
  text-align: center;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  @include m.mq(sm) {
    font-size: 1.25rem;
    padding: 0.5rem;
  }
  th,
  td {
    padding: 0.5rem;
  }
}
</style>
