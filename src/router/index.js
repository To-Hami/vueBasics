import { createRouter, createWebHistory } from 'vue-router'

import first from '../views/first.vue'
import format from '../views/format.vue'
import about from '../views/About.vue'
import contact from '../views/Contact.vue'
import main from '../views/Mymain.vue'
import Post from '../views/Post.vue'
import User from '../views/User.vue'
import Head from '../views/Head.vue'
import heat from '../views/Heat.vue'
import Compostionapi from '../views/Compostionapi.vue'


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
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/compostionapi',
      name: 'compostionapi',
      component: Compostionapi
    },
    {
      path: '/head',
      name: 'head',
      component: Head
    },
    {
      path: '/heat',
      name: 'heat',
      component: heat
    },
    
   
  ]
})

export default router
