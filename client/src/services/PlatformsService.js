import Api from '@/services/Api'

export default {
  getAllPlatforms () {
    return Api().get('platforms')
  }
}
