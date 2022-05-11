import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Index.vue'),
    meta: {
      title: '首页'
    },
    name: 'Index'
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录'
    },
    name: 'Login'
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    name: 'Author',
    path: '/author/:id',
    component: () => import('@/views/Author.vue'),
    meta: {
      title: '知乎'
    }
  },
  {
    name: 'Post',
    path: '/post/:id',
    component: () => import('@/views/Post.vue'),
    meta: {
      title: '文章详情'
    }
  },
  {
    path: '/new',
    component: () => import('@/views/New.vue'),
    name: 'New',
    meta: {
      title: '新建文章'
    }
  },
  {
    path: '/edit',
    component: () => import('@/views/Edit.vue'),
    name: 'Edit',
    meta: {
      title: '编辑资料'
    }
  },
  {
    path: '/test',
    component: () => import('@/views/Test.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition): any {
    if (savedPosition) {
      return savedPosition
    } else {
      from.meta.savedPosition = document.body.scrollTop
    }
    return { x: 0, y: to.meta.savedPosition || 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || '知乎'
  next()
})

export default router
