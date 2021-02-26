import { createRouter, createWebHistory } from 'vue-router'
import Views from '@/views/Home'

const routes = [
  {
    path: '/',
    component: Views
  },
  {
    path:'/books',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Books')
  },
  {
    path:'/books/:id',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Books')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
