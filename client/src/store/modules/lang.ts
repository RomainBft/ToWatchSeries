import i18n from '@/plugins/i18n'
import { ActionContext } from 'vuex'
import { Locale } from '@/types/lang.type'

class State {
    constructor() {
        this.locale = process.env.VUE_APP_I18N_LOCALE === 'fr' ? 'fr' : 'en'
    }

    locale: Locale;
}

const lang : object =  {
    namespaced: true,
    strict: true,
    state: new State(),
    mutations: {
        UPDATE_LOCAL(state : State, newLocale : Locale) {
            state.locale = newLocale
        },
    },
    actions: {
        changeLocale({ commit }: ActionContext<State, State>, newLocale : Locale) {
            i18n.locale = newLocale
            commit('UPDATE_LOCAL', newLocale)
        }
    }
}

export default lang;