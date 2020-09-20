import CategoriesService from '@/services/CategoriesService'
import PlatformsService from '@/services/PlatformsService'

const series = {
    namespaced: true,
    strict: true,
    state: {
        loading: false,
        categories: null,
        platforms: null
    },
    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        SET_PLATFORMS(state, plateforms) {
            state.platforms = plateforms
        }
    },
    actions: {
        setCategories({commit}) {
            CategoriesService.getAllCategories()
            .then(resp => {
                commit('SET_CATEGORIES', resp.data)
            })
            .catch(err => {throw err})
        },

        setPlatforms({commit}) {
            PlatformsService.getAllPlatforms()
            .then(resp => {
                commit('SET_PLATFORMS', resp.data)
            })
            .catch(err => {throw err})
        }
    }
}

export default series;