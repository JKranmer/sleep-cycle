<template>
  <v-detail-view>
    <v-card>
      <section>
        <h2>Oque é ciclo do sono?</h2>
        <p>
          O ciclo do sono é um conjunto de fases que começam desde o momento em
          que a pessoa adormece e vão progredindo e tornando-se cada vez mais
          profundas, até o corpo entrar em sono REM.
        </p>
        <p>
          Normalmente, o sono REM é o mais difícil de alcançar, mas é nessa fase
          que o corpo consegue realmente relaxar e na qual a taxa de renovação
          cerebral é maior. A maior parte das pessoas segue o seguinte padrão de
          fases de sono
        </p>
      </section>
      <section>
        <h2>Quanto tempo dura o ciclo do sono?</h2>
        <p>
          O corpo passa por vários ciclos de sono durante uma noite, sendo que o
          primeiro dura cerca de 90 minutos e depois a duração vai aumentando,
          até uma média de 100 minutos por ciclo. Um adulto geralmente tem entre
          4 a 5 ciclos de sono por noite, o que acaba por fazer as 8 horas de
          sono necessárias.
        </p>
      </section>
      <a
        class="link"
        href="https://www.tuasaude.com/fases-do-sono/"
        target="_blank"
        >Fonte: Tua Saúde</a
      >
    </v-card>
    <v-card>
      <h2>Objetivo da aplicação</h2>
      <p>
        Já foi comprovado cientificamente que acordar entro os ciclos é mais
        prejudicial do que dormir um ciclo a menos. Com esse pensamento foi
        desenvolvido a aplicação na qual é possível calcular quando acordar ou
        quando dormir, selecionar a quantidades de ciclo com o intutito de
        sempre acordar no sono leve.
      </p>
    </v-card>
  </v-detail-view>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 1.5rem;
  &:not(:first-child) {
    padding-top: 1.5rem;
    border-top: 2px solid v.$neutral-color-low-medium;
  }
}

h2 {
  margin-top: 0;
}
</style>

<script setup lang="ts">
import VCard from "@/components/VCard/VCard.vue";
import VDetailView from "@/views/template/DetailView.vue";
</script>
