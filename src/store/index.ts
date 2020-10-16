import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:'',
      userinfor:{},
      csrf: '',
      navList: []
  },
  mutations: {
    setToken(state, newValue) {
      state.token = newValue
    },
    setValue(state, newvalue) {
        state.userinfor = newvalue
    },
    setNavList(state, newValue) {
      state.navList = newValue
    },
    clearValue(state) {
        state.token = ''
        state.userinfor = {}
        state.csrf = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
