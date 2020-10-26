import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS()
import auth from './modules/users';
import series from './modules/series';
import lang from './modules/lang'

Vue.use(Vuex)

const dataState = createPersistedState({
  storage: {
    getItem: (key) => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: (key) => ls.remove(key),
  },
})

const store =  new Vuex.Store({
  modules: {
    auth,
    series,
    lang
  },
  plugins: [dataState]
})

export default store;