import i18n, { selectedLocale } from '@/plugins/i18n'

const lang = {
    namespaced: true,
    strict: true,
    state: {
        locale: selectedLocale
    },
    mutations: {
        UPDATE_LOCAL(state, newLocale) {
            state.locale = newLocale
        },
    },
    actions: {
        changeLocale({ commit }, newLocale) {
            i18n.locale = newLocale
            commit('UPDATE_LOCAL', newLocale)
        }
    }
}

export default lang;