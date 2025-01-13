import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'

import MainAuth from '../components/AuthComponents/MainAuth.vue'
import LoginAuth from '../components/AuthComponents/LoginAuth.vue'
import SignupAuth from '../components/AuthComponents/SignupAuth.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: '',
          name: 'main',
          component: MainAuth,
        },
        {
          path: 'login',
          name: 'login',
          component: LoginAuth,
        },
        {
          path: 'signup',
          name: 'signup',
          component: SignupAuth,
        },
      ]
    },
  ],
})

export default router
