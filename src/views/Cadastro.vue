<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h2>Cadastro</h2>
      <ion-input placeholder="Nome"></ion-input>
      <ion-input placeholder="Email"></ion-input>
      <ion-input placeholder="Senha"></ion-input>
      <ion-button expand="full">Cadastrar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue'
</script>