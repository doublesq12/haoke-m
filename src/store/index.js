import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {},
    citycode: ''
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      setToken(payload)
    },
    getCityId(state, id) {
      state.citycode = id
    }
  }
})
