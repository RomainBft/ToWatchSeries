import Api from '@/services/Api'

export default {
  getSeries (id) {
    return Api().get(`series?userId=${id}&_sort=view:ASC`)
  },
  getOneSerie (serieId) {
    return Api().get(`series?id=${serieId}`)
  },
  updateView (serieId, view) {
    return Api().put(`series/${serieId}`, view)
  },
  updateSerie (serieId, serie) {
    return Api().put(`series/${serieId}`, serie)
  },
  deleteSerie (serieId) {
    return Api().delete(`series/${serieId}`)
  },
  postSeries (serie) {
    return Api().post('series', serie)
  }
}