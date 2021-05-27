import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state() {
    return {
      authenticated: false,
      token: null
    }
  },
  mutations: {
    authenticate(state, token) {
      state.authenticated = true
      state.token = token
    },
    logout(state) {
      state.authenticated = false
      state.token = null
    },
  },
  getters: {
    auth: state => state.authenticated,
    token: state => state.token
  },
  plugins: [vuexLocal.plugin]
})