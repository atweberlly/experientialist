import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ComingSoon from '../views/ComingSoon.vue'

const routes = [
  {
    path: '/',
    redirect: '/coming-soon',
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/coming-soon',
    component: ComingSoon,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
