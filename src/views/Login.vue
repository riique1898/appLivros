<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h2>Login</h2>

      <ion-input v-model="email" placeholder="Email"></ion-input>
      <ion-input v-model="senha" type="password" placeholder="Senha"></ion-input>

      <ion-button expand="full" @click="entrar">Entrar</ion-button>

      <ion-button fill="clear" @click="router.push('/cadastro')">
        Criar conta
      </ion-button>

      <ion-button fill="clear" @click="router.push('/recuperar')">
        Esqueci a senha
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { IonPage, IonContent, IonInput, IonButton } from '@ionic/vue'

const router = useRouter()

const email = ref('')
const senha = ref('')

const entrar = () => {
  if (email.value && senha.value) {
    router.push('/home')
  }
}
</script>