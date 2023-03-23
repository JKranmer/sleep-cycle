<template>
  <v-card>
    <h1>Manipulação de form dinamico</h1>
    <v-form>
      <div style="color: white"></div>
      <div v-for="(q, index) in questions" :key="index" class="form__group">
        <label :for="q.name">{{ q.label }}</label>
        <component
          :is="q.type"
          :name="q.name"
          v-model:question="radioData"
          :opts="q.option"
        ></component>
      </div>
    </v-form>
    {{ radioData }}
    <br />{{ inputData }}
  </v-card>
</template>
<script setup lang="ts">
import VCard from "@/components/VCard/VCard.vue";
import VForm from "@/components/VForm/VForm.vue";
import VInput from "@/components/VForm/VInput.vue";
import VRadio from "@/components/VForm/VRadio.vue";
import { ref } from "vue";

const radioData = ref();
const inputData = ref();

const questions = [
  {
    label: "Questão 1",
    type: VInput,
    teste: inputData,
    name: "Q1",
  },
  {
    label: "Questão 2",
    type: VRadio,
    name: "Q2",
    teste: radioData,
    option: [
      { label: "Opt 1", value: "opt_value_1", name: "opt_1" },
      { label: "Opt 2", value: "opt_value_2", name: "opt_2" },
    ],
  },
  // {
  //   label: "Questão 3",
  //   type: "checkbox",
  //   name: "Q3",
  //   option: [
  // { label: "Opt 1", value: "opt_value_1", name: "opt_1" },
  // { label: "Opt 2", value: "opt_value_2", name: "opt_2" },
  //   ],
  // },
  // {
  //   label: "Questão 4",
  //   type: "textarea",
  //   name: "Q4",
  // },
  // {
  //   label: "Questão 5",
  //   type: "select",
  //   name: "Q5",
  //   option: [
  // { label: "Opt 1", value: "opt_value_1", name: "opt_1" },
  // { label: "Opt 2", value: "opt_value_2", name: "opt_2" },
  //   ],
  // },
];
</script>
<style lang="scss" setup>
.form {
  display: block;
  &__group {
    margin: 1rem;
  }
}
</style>
