import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () =>
      import(/* webpackChunkName:"jay" */ '@/components/home.vue')
  },
  {
    path: '/jay',
    component: () => import(/* webpackChunkName:"jay" */ '@/components/jay.vue')
  }
]
const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})
export default router
