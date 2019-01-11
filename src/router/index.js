import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Layout from '@/views/Layout/main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'test',
          name: 'test',
          component: () => import('../components/Footer')
        },
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'project-center',
          name: 'ProjectCenter',
          component: () => import('@/views/ProjectCenter')
        },
        {
          path: 'talent-market',
          name: 'TalentMarket',
          component: () => import('@/views/TalentMarket')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Login.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/views/404.vue')
    }
  ]
})
