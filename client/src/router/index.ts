import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/profil',
      name: 'Profil',
      component: () => import('@/views/Profil.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/forgotPassword',
      name: 'Forgot Password',
      component: () => import('@/views/ForgotPassword.vue')
    },
    {
      path: '/resetPassword',
      name: 'Reset Password',
      component: () => import('@/views/ResetPassword.vue')
    },
    {
      path: '*',
      component: () => import('@/views/Home.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router