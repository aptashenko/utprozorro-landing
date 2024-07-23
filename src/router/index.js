import { createRouter, createWebHistory } from 'vue-router'
import StartView from "@/views/start-view.vue";
import BuyView from "@/views/buy-view.vue";
import {isNewUser} from "@/router/navigation-guards/quiz-page.js";
import { isRedirected } from '@/router/navigation-guards/success-payment.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BuyView
    },
    {
      path: '/start',
      name: 'start',
      component: StartView
    },
    {
      path: '/quiz/:id',
      name: 'quiz',
      component: () => import('../views/quiz-view.vue'),
      beforeEnter: isNewUser
    },
    {
      path: '/buy',
      name: 'landing',
      component: BuyView
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('@/views/support-view.vue'),
    },
    {
      path: '/payment-success',
      name: 'payment-success',
      component: () => import('@/views/payment-success-view.vue'),
      beforeEnter: isRedirected
    }
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 });
    });
  },
})



export default router
