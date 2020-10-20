import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Profil from '@/views/Profil'
import Login from '@/views/Login'
import ForgotPassword from '@/views/ForgotPassword'
import ResetPassword from '@/views/ResetPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgotPassword',
      name: 'Forgot Password',
      component: ForgotPassword
    },
    {
      path: '/resetPassword',
      name: 'Reset Password',
      component: ResetPassword
    },
    {
      path: '*',
      redirect: Home
    }
  ]
})
