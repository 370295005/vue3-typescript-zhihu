import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/index.vue')
  },
  {
    path: '/post/:id',
    component: () => import('../views/post.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
