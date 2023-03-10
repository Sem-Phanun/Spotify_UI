import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('@/views/Library.vue')
    },
    {
      path: '/playlists',
      name: 'playlists',
      component: () => import('@/views/Playlists.vue')
    },
    {
      path: '/collection',
      name: 'collection',
      component: () => import('@/views/Collection.vue')
    }

  ]
})

export default router
