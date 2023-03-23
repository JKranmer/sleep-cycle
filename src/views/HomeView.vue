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
                :value="0"
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
                :value="1"
              />
            </label>
          </div>
        </div>
        <div class="form__group">
          <label for="start-sleep" class="texto"
            >Hora de <span>{{ EWord[form.start] }}:</span>
          </label>
          <input
            type="time"
            name="start-sleep"
            id="start-sleep"
            v-model="form.time"
            placeholder="Preencher"
          />
        </div>
        <v-range class="form__group" v-model:qt="form.qtCycle" />
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
            :label="`Hora de ${EWord[form.start]}`"
            :value-text="form.time"
            status="regular"
          ></v-resume>
          <v-resume
            :label="`Tempo previsto para
            ${EWord[form.start == 1 ? 0 : 1]}`"
            :value-text="cardUp"
          ></v-resume>
        </v-resume-group>
      </div>
      <div class="group-btn">
        <v-button status="primary" @click="showTable = !showTable"
          >{{ labelShow }} tabela</v-button
        >
      </div>
      <div v-if="showTable">
        <h2>Tabela de horário de onibus:</h2>
        <v-table :start="form.start" :array-time-bus="list">
          <template #default="{ item }">
            <td>
              <div class="table--icon">
                <v-icon icon="alarm_smart_wake"></v-icon>
                {{ item.timeUp }}
              </div>
            </td>
            <td>
              <div class="table--icon">
                <v-icon icon="snooze"></v-icon>
                {{ item.duration }}
              </div>
            </td>
            <td>
              <div class="table--icon">
                <v-icon icon="acute"></v-icon>
                {{ item.time }}
              </div>
            </td>
          </template>
        </v-table>
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
.group-btn {
  width: 100%;
  text-align: center;
  padding-top: 1rem;
}

.table--icon {
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 0.5rem;
  }
}
</style>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { RouterLink } from "vue-router";

import VContainer from "@/components/VContainer/VContainer.vue";
import VCard from "@/components/VCard/VCard.vue";
import VForm from "@/components/VForm/VForm.vue";
import VRange from "@/components/VRange/VRange.vue";
import VResume from "@/components/VResume/VResume.vue";
import VResumeGroup from "@/components/VResume/VResumeGroup.vue";
import VButton from "@/components/VButton/VButton.vue";
import VTable from "@/components/VTable/VTable.vue";
import VIcon from "@/components/VIcon/VIcon.vue";

import {
  calcTime,
  transformTime,
  listTimeBus,
  EWord,
  type ITimeBus,
} from "./SleepCycle";

const cardDuration = ref("");
const cardUp = ref("");
const list = ref([{ time: "", duration: "", timeUp: "" }] as ITimeBus[]);

const form = ref({
  start: 0,
  qtCycle: 5,
  time: "22:00",
});

const showTable = ref(false);
const labelShow = computed(() => (showTable.value ? "Ocultar" : "Mostrar"));

const starCalc = (): void => {
  cardDuration.value = transformTime(form.value.qtCycle);
  cardUp.value = calcTime(form.value);
  list.value = listTimeBus(form.value);
};

watch(
  form,
  () => {
    starCalc();
  },
  { deep: true, immediate: true }
);
</script>
