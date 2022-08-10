import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ComingSoon from '../views/ComingSoon.vue'
import _404Page from '../views/404Page.vue'

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

  {
    path: '/:pathMatch(.*)*',
    component: _404Page,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
