<template>
  <v-container>
    <v-card>
      <h1>Calculo de ciclo de sonos</h1>
      <router-link to="/about">Saiba mais como isso funciona</router-link>
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
                value="start"
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
                value="end"
              />
            </label>
          </div>
        </div>
        <div class="form__group">
          <label for="start-sleep" class="texto"
            >Hora de <span>dormir:</span></label
          >
          <input
            type="time"
            name="start-sleep"
            id="start-sleep"
            v-model="form.time"
            placeholder="Preencher"
          />
        </div>
        <v-range class="form__group" @getQtCycle="setQtCycle" />
        <div class="form__group">
          <v-button status="primary">Calcular</v-button>
        </div>
      </v-form>
      <div id="resultado">
        <v-resume-group>
          <v-resume
            label="Duração do sono:"
            value-text="00:00"
            status="error"
          ></v-resume>
          <v-resume
            label="Hora de dormir"
            value-text="00:00"
            status="regular"
          ></v-resume>
          <v-resume
            label="Tempo previsto para acordar:"
            value-text="00:00"
          ></v-resume>
        </v-resume-group>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import VContainer from "@/components/VContainer/VContainer.vue";
import VCard from "@/components/VCard/VCard.vue";
import VForm from "@/components/VForm/VForm.vue";
import VRange from "@/components/VRange/VRange.vue";
import VButton from "@/components/VButton/VButton.vue";
import VResume from "@/components/VResume/VResume.vue";
import VResumeGroup from "@/components/VResume/VResumeGroup.vue";
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";

const form = ref({
  qtCycle: 0,
  start: true,
  time: "00:00",
});

const setQtCycle = (value: number): void => {
  form.value.qtCycle = value;
};

watch(
  () => form,
  (): void => {
    // ToDo
    console.log("Change Value", form.value);
  },
  { deep: true }
);
</script>
