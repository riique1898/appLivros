<template>
  <ion-page>
    <ion-content class="ion-padding">
         <!-- BOTÃO -->
      <ion-button expand="full" @click="voltar">
        Voltar para login
      </ion-button>
      <h2>Livros</h2>

      <ion-list>
        <ion-item v-for="livro in livros" :key="livro.id" @click="ver(livro.id)">
          <ion-label>
            <h2>{{ livro.titulo }}</h2>
            <p>{{ livro.autor }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { livros } from '../data/livros'
import { useRouter } from 'vue-router'
import { IonPage, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue'

const router = useRouter()

const ver = (id: number) => {
  router.push(`/detalhe/${id}`)
}
const voltar = () => {
  router.push('/login')
}
</script>