import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('/auth/local/register', credentials)
  },

  login (credentials) {
    return Api().post('/auth/local', credentials)
  },

  forgotPassword (credentials) {
    return Api().post('/auth/forgot-password', credentials)
  },

  resetPassword (credentials) {
    return Api().post('/auth/reset-password', credentials)
  },

  updateProfile (user) {
    return Api().put(`/users/${user.id}`, user.info)
  }
}