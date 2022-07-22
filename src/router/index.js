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
    name: 'Home Page',
    component: HomePage,

  },
  {
    path: '/coming-soon',
    name: 'Coming Soon',
    component: ComingSoon,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
