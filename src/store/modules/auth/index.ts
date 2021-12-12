import axios from "../../../axios";

export default {
    namespaced: true,
    state: {
        token: '',
        user: {}
    },
    getters: {
        authenticated(state) {
            return !!state.token && !!state.user
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        login({dispatch}, data) {
            return axios.post('auth/v1/login', data).then(response => {
                return dispatch('attempt', response.data.token)
            }).catch(error => {
                throw error
            })
        },
        attempt({commit, state}, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) {
                return
            }

            axios.get('auth/v1/profile').then(response => {
                commit('SET_USER', response.data)
            }).catch(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', {})
            })
        },
        logout({commit}) {
            commit('SET_TOKEN', null)
            commit('SET_USER', {})
        }
    }
}
