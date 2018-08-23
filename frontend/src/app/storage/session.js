// Dependencies
import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/app/api'
import JWT from 'jwt-decode'
// Enable Storage
Vue.use(Vuex)
// Code
export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    active: false,
    client: false,
    ready: false
  },
  getters: {
    ready: state => {
      return state.ready
    },
    active: state => {
      return state.active
    },
    user: state => {
      return state.user
    },
    client: state => {
      return state.client
    }
  },
  mutations: {
    setClient: (state, status) => {
      state.client = status
    },
    setToken: (state, token) => {
      // Save to Storage
      localStorage.set('user-token', token)
      // Change State
      state.token = token
    },
    setUser: (state, user) => {
      // Save to Storage
      localStorage.set('user-data', user)
      // Change State
      state.user = user
    },
    setActive: (state, status) => {
      state.active = status
    },
    init: (state) => {
      // Fetch localStorage
      let storage = {
        user: localStorage.get('user-data'),
        token: localStorage.get('user-token')
      }
      // Check for valid data
      if (storage.user === null) {
        localStorage.removeItem('user-data')
        localStorage.removeItem('user-token')
        state.active = false
        state.ready = true
      } else {
        // Commit
        state.user = storage.user
        state.token = storage.token
        state.active = true
        state.ready = true
        API.defaults.headers['heroic-token'] = storage.token
      }
    }
  },
  actions: {
    // Toggle Client
    client: (context, status) => {
      context.commit('setClient', status)
    },
    // Login
    start: async (context, user) => {
      try {
        let result = await API.post('session', user)
        context.commit('setToken', result.data)
        context.commit('setUser', JWT(result.data))
        context.commit('setActive', 'true')
        API.defaults.headers['heroic-token'] = result.data
        return Promise.resolve(true)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // Logout
    logout: (context) => {
      context.commit('setToken', null)
      context.commit('setUser', null)
      context.commit('setActive', false)
      return Promise.resolve()
    },
    // Fetch session from storage
    init: async (context) => {
      await context.commit('init')
      return Promise.resolve()
    }
  }
})
