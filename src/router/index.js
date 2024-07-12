import { createRouter, createWebHistory } from 'vue-router'
import StartView from "@/views/start-view.vue";
import BuyView from "@/views/buy-view.vue";

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
      component: () => import('../views/quiz-view.vue')
    },
    {
      path: '/buy',
      name: 'landing',
      component: BuyView
    }
  ]
})

export default router
