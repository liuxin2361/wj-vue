import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: window.sessionStorage.getItem('username') == null ? '' : JSON.parse(window.sessionStorage.getItem('username'))
    },
    mutations: {
        login(state, data) {
            state.username = data
            window.sessionStorage.setItem('username', JSON.stringify(data))
        },
        logout(state) {
            state.username = ''
            window.sessionStorage.removeItem('username')
        }
    }
})

export default store
