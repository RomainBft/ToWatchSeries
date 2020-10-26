import CategoriesService from '@/services/CategoriesService'
import PlatformsService from '@/services/PlatformsService'
import { SeriesState } from '@/types/series.type'
import { ActionContext } from 'vuex'

const series = {
    namespaced: true,
    strict: true,
    state: new SeriesState(),
    mutations: {
        SET_CATEGORIES(state : SeriesState, categories : Array<String>) {
            state.categories = categories
        },
        SET_PLATFORMS(state : SeriesState, plateforms : Array<String>) {
            state.platforms = plateforms
        }
    },
    actions: {
        setCategories({commit} : ActionContext<SeriesState, SeriesState>) {
            CategoriesService.getAllCategories()
            .then(resp => {
                commit('SET_CATEGORIES', resp.data)
            })
            .catch(err => {throw err})
        },

        setPlatforms({commit} : ActionContext<SeriesState, SeriesState>) {
            PlatformsService.getAllPlatforms()
            .then(resp => {
                commit('SET_PLATFORMS', resp.data)
            })
            .catch(err => {throw err})
        }
    }
}

export default series;