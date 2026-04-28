import { createRouter, createWebHistory } from '@ionic/vue-router'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Detalhe from '../views/Detalhe.vue'
import Cadastro from '../views/Cadastro.vue'
import RecuperarSenha from '../views/RecuperarSenha.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  { path: '/detalhe/:id', component: Detalhe },
  { path: '/cadastro', component: Cadastro },
  { path: '/recuperar', component: RecuperarSenha }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router