import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/component',
    component: () => import('@/views/My/component.vue')
  },
  {
    path: '/rent',
    component: () => import('@/views/My/rent.vue')
  },
  {
    path: '/favorate',
    component: () => import('@/views/My/favorate.vue')
  },
  {
    path: '/',
    component: () => import('@/views/Login')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/ ',
    children: [
      {
        path: '/ ',
        component: () => import('@/views/Home')
      },
      {
        path: '/fr',
        component: () => import('@/views/FR')
      },
      {
        path: '/information',
        component: () => import('@/views/Information')
      },
      {
        path: '/profile',
        component: () => import('@/views/My')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
