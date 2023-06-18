import { createRouter, createWebHistory } from 'vue-router'
import first from '../views/first.vue'

import format from '../views/format.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    },

 
    
    {
      path: '/',
      name: 'format',
      component: format
    },
   
  ]
})

export default router
