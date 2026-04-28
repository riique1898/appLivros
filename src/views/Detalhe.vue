<template>
  <ion-page>
    <ion-content class="ion-padding" v-if="livro">

      <!-- TÍTULO -->
      <h2>{{ livro.titulo }}</h2>
      <p><strong>{{ livro.autor }}</strong></p>

      <!-- IMAGEM -->
      <img :src="livro.imagem" class="capa" />

      <!-- DESCRIÇÃO -->
      <p class="descricao">
        {{ livro.descricao }}
      </p>

      <!-- BOTÃO -->
      <ion-button expand="full" @click="voltar">
        Voltar
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { livros } from '../data/livros'

import {
  IonPage,
  IonContent,
  IonButton
} from '@ionic/vue'

const route = useRoute()
const router = useRouter()

const livro = livros.find(l => l.id == Number(route.params.id))

const voltar = () => {
  router.push('/home')
}
</script>

<style scoped>
/* 📚 imagem controlada */
.capa {
  width: 150px;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  margin: 15px auto;
}

/* 📝 descrição */
.descricao {
  text-align: center;
  color: #ccc;
  margin-top: 10px;
  line-height: 1.4;
}
</style>