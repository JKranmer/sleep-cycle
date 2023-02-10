<script setup lang="ts">
import VContainer from "./components/VContainer/VContainer.vue";
import VCard from "./components/VCard/VCard.vue";
import VForm from "./components/VForm/VForm.vue";
import VRange from "./components/VRange/VRange.vue";
import VButton from "./components/VButton/VButton.vue";
import VResume from "./components/VResume/VResume.vue";
</script>

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
                value="start"
                id="start"
                checked
              />
            </label>
          </div>
          <div class="form__radio--group">
            <label for="end"
              >Final
              <input type="radio" name="type" value="end" id="end" />
            </label>
          </div>
        </div>
        <div class="form__group">
          <label for="start-sleep" class="texto"
            >Hora de<span>dormir:</span></label
          >
          <input
            type="time"
            name="start-sleep"
            id="start-sleep"
            value="00:00"
            placeholder="Preencher"
          />
        </div>
        <v-range class="form__group" />
        <div class="form__group">
          <v-button status="primary">Calcular</v-button>
        </div>
      </v-form>
      <div id="resultado">
        <v-resume></v-resume>
      </div>
    </v-card>
  </v-container>
</template>

<style></style>
