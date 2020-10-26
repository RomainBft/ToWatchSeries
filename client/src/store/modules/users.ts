import SecureLS from "secure-ls";
const ls = new SecureLS()
import { ActionContext } from 'vuex'
import { UserState, Account } from '@/types/users.type'
import AuthenticationService from '@/services/AuthenticationService'

const auth : object = {
    namespaced: true,
    strict: true,
    state: new UserState(),
    mutations: {
        SET_AUTH(state : UserState, account : Account) {
            if (account) {
                state.isUserLoggedIn = true
                state.account = account
                ls.set('account', {data: account.user});
                ls.set('key', {data: account.jwt});
            } else {
                state.isUserLoggedIn = false
            }
        },
        SET_UPDATE_PROFIL(state : UserState, account : Account) {
            state.account = account
        }
    },
    actions: {
        setAuth({commit} : ActionContext<UserState, UserState>, account : Account) {
            return new Promise((resolve, reject) => {
                AuthenticationService.login(account)
                .then(resp => {
                    resolve({resp : resp.data})
                    commit('SET_AUTH', resp.data)
                }, err => {
                    reject(err);
                })
            })
        },
        setUpdateProfil({commit} : ActionContext<UserState, UserState>, account : any) {
            AuthenticationService.updateProfile(account)
            .then(resp => {
                commit('SET_UPDATE_PROFIL', resp.data)
            })
            .catch(err => {throw err})
        }
    },
}

export default auth;