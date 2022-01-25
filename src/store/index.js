import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      username: window.sessionStorage.getItem('user' || '[]') == null? '': JSON.parse(window.sessionStorage.getItem('user' || '[]')).username
    }
  },
  mutations: {
    login(state, user) {
      state.user = user
      window.sessionStorage.setItem('user', JSON.stringify(user))
    }
  }
})

export default store
