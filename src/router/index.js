import { createRouter, createWebHistory } from 'vue-router'
import first from '../views/first.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    },
   
  ]
})

export default router
