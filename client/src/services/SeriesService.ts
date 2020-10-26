import Api from '@/services/Api'

export default {
  getSeries (id : number) {
    return Api().get(`series?userId=${id}&_sort=view:ASC`)
  },
  getOneSerie (serieId : number) {
    return Api().get(`series?id=${serieId}`)
  },
  updateView (serieId : number, view : boolean) {
    return Api().put(`series/${serieId}`, view)
  },
  updateSerie (serieId : number, serie : Object) {
    return Api().put(`series/${serieId}`, serie)
  },
  deleteSerie (serieId : number) {
    return Api().delete(`series/${serieId}`)
  },
  postSeries (serie : Object) {
    return Api().post('series', serie)
  }
}

