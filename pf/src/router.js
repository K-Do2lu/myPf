import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/MainArea',
    name: 'MainArea',
    component: () => import('./components/MainArea.vue')
  },
  {
    path: '/',
    name: 'WorkArea',
    component: () => import('./components/WorkArea.vue')
  },
  {
    path: '/WorkAbout',
    name: 'WorkAbout',
    component: () => import('./components/WorkAbout.vue')
  },
  {
    path: '/ContactArea',
    name: 'ContactArea',
    component: () => import('./components/ContactArea.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
