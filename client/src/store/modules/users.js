import SecureLS from "secure-ls";
const ls = new SecureLS()
import AuthenticationService from '@/services/AuthenticationService'

const auth = {
    namespaced: true,
    strict: true,
    state: {
        account: null,
        isUserLoggedIn: false
    },
    mutations: {
        setDarkTheme(state) {
            state.isDarkTheme = !state.isDarkTheme
        },
        SET_AUTH(state, info) {
            if (info) {
                state.isUserLoggedIn = true
                state.account = info,
                ls.set('account', {data: info.user});
                ls.set('key', {data: info.jwt});
            } else {
                state.isUserLoggedIn = false
            }
            state.user = info
        },
        SET_UPDATE_PROFIL(state, info) {
            state.user.user = info
        }
    },
    actions: {
        setAuth({commit}, credentials) {
            return new Promise((resolve, reject) => {
                AuthenticationService.login(credentials)
                .then(resp => {
                    resolve({resp : resp.data})
                    commit('SET_AUTH', resp.data)
                }, error => {
                    reject(error);
                })
            })
        },
        setUpdateProfil({commit}, info) {
            AuthenticationService.updateProfile(info)
            .then(resp => {
                commit('SET_UPDATE_PROFIL', resp.data)
            })
            .catch(err => {throw err})
        }
    },
}

export default auth;