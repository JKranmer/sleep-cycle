<template>
  <v-container>
    <v-card>
      <h1>Calculo de ciclo de sonos</h1>
      <v-form>
        <div class="form__radio">
          <div class="form__radio--group">
            <label for="start"
              >Início
              <input
                type="radio"
                name="type"
                v-model="form.start"
                id="start"
                value="0"
              />
            </label>
          </div>
          <div class="form__radio--group">
            <label for="end"
              >Final
              <input
                type="radio"
                name="type"
                v-model="form.start"
                id="end"
                value="1"
              />
            </label>
          </div>
        </div>
        <div class="form__group">
          <label for="start-sleep" class="texto"
            >Hora de <span>{{ handlePhrease(form.start) }}:</span>
          </label>
          <input
            type="time"
            name="start-sleep"
            id="start-sleep"
            v-model="form.time"
            placeholder="Preencher"
          />
        </div>
        <v-range class="form__group" @getQtCycle="setQtCycle" />
      </v-form>
      <div id="resultado">
        <h2>Resultado:</h2>
        <v-resume-group>
          <v-resume
            label="Duração do sono:"
            :value-text="cardDuration"
            status="error"
          ></v-resume>
          <v-resume
            :label="`Hora de ${handlePhrease(form.start)}`"
            :value-text="form.time"
            status="regular"
          ></v-resume>
          <v-resume
            :label="`Tempo previsto para
            ${handlePhrease(form.start == 1 ? 0 : 1)}`"
            :value-text="cardUp"
          ></v-resume>
        </v-resume-group>
      </div>
      <div>
        <h2>Tabela de horário de onibus:</h2>
        <v-table :start="form.start" :array-time-bus="list"></v-table>
        <router-link class="link" to="/curiosity">Curiosidade</router-link>
      </div>
      <div class="footer">
        <router-link class="link" to="/about"
          >Saiba mais como isso funciona</router-link
        >
      </div>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 2rem;
  text-align: center;
}
h2 {
  margin: 1.5rem 0;
  font-size: 1.25rem;
}
</style>

<script setup lang="ts">
import VContainer from "@/components/VContainer/VContainer.vue";
import VCard from "@/components/VCard/VCard.vue";
import VForm from "@/components/VForm/VForm.vue";
import VRange from "@/components/VRange/VRange.vue";
import VResume from "@/components/VResume/VResume.vue";
import VResumeGroup from "@/components/VResume/VResumeGroup.vue";
import VTable from "@/components/VTable/VTable.vue";

import { ref, watch, onMounted } from "vue";
import { RouterLink } from "vue-router";
import {
  calcTime,
  transformTime,
  handlePhrease,
  listTimeBus,
} from "./SleepCycle";
import type { ITimeBus } from "./SleepCycle";

const cardDuration = ref("");
const cardUp = ref("");
const list = ref([{ time: "", duration: "", timeUp: "" }] as ITimeBus[]);

const form = ref({
  start: 0,
  qtCycle: 5,
  time: "22:00",
});

const setQtCycle = (value: number): void => {
  form.value.qtCycle = value;
};

watch(
  () => form,
  (): void => starCalc(),
  { deep: true }
);

onMounted((): void => {
  starCalc();
});

const starCalc = (): void => {
  cardDuration.value = transformTime(form.value.qtCycle);
  cardUp.value = calcTime(form.value);
  list.value = listTimeBus(form.value);
};
</script>
