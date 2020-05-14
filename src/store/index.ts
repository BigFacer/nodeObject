import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:'',
      userinfor:{},
      csrf: ''
  },
  mutations: {
    setToken(state, newValue) {
      state.token = newValue
    },
    setValue(state, newvalue) {
        state.userinfor = newvalue
    }
  },
  actions: {
  },
  modules: {
  }
})
