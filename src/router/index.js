import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/isce',
      name: 'isce',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/IsceView.vue')
    },
    // tentang
    {
      path: '/tentang',
      name: 'tentang',
      component: () => import('@/views/tentang/Tentang.vue')
    },
    {
      path: '/tentang/lambang',
      name: 'lambang',
      component: () => import('@/views/tentang/Lambang.vue')
    },
    {
      path: '/tentang/alumni',
      name: 'alumni',
      component: () => import('@/views/tentang/AlumniView.vue')
    },
    // divisi
    {
      path: '/divisi/inti',
      name: 'inti',
      component: () => import('@/views/divisi/Inti.vue')
    },
    {
      path: '/divisi/:divisi',
      name: 'divisi',
      component: () => import('@/views/divisi/DivisiView.vue')
    },
    // blog
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog.vue')
    },
    // not found
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/404.vue')
    }
  ]
})

export default router
