import Api from '@/services/Api'

export default {
  register (credentials : Object) {
    return Api().post('/auth/local/register', credentials)
  },

  login (credentials : Object) {
    console.log(credentials)
    return Api().post('/auth/local', credentials)
  },

  forgotPassword (credentials : Object) {
    return Api().post('/auth/forgot-password', credentials)
  },

  resetPassword (credentials : Object) {
    return Api().post('/auth/reset-password', credentials)
  },

  updateProfile (user : User) {
    return Api().put(`/users/${user.id}`, user.info)
  }
}

export interface User {
  id: number;
  info : Object | String,
}