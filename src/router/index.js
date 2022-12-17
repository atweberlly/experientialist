import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ComingSoon from '../views/ComingSoon.vue'
import _404Page from '../views/404Page.vue'
import EventsPage from '../views/EventsPage.vue'
import ContactPage from '../views/ContactPage.vue'
import AboutPage from '../views/AboutPage.vue'
import AboutMain from '../views/AboutMainPage.vue'
import ServicesPage from '../views/ServicesPage.vue'
import ServicesLeisuresPage from '../views/ServicesLeisuresPage.vue'
import BookingDetailsPage from '../views/ServicesBookingDetailsPage.vue'

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
    path: '/events',
    component: EventsPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/about-main',
    component: AboutMain,
  },
  {
    path: '/services',
    component: ServicesPage,
  },
  {
    path: '/services/leisures',
    component: ServicesLeisuresPage,
  },
  {
    path: '/services/leisures/booking-details',
    component: BookingDetailsPage,
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
