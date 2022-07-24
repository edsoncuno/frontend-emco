import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 'Este es un mensaje dentro del vuex',
  },
  getters: {
    mensaje(state) {
      return state.msg;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
