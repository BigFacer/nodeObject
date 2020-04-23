import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      token:'',
      userinfor:[]
  },
  mutations: {
    setValue(state, newValue) {
      state.token = newValue
    }
  },
  actions: {
  },
  modules: {
  }
})
