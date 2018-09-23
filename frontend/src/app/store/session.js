import Vue from 'vue'
import Vuex from 'vuex'
import JWT from 'jwt-decode'
import { API } from '../index'

Vue.use(Vuex)

const state = {
  loaded: false,
  session: {}
}

const getters = {
  loaded: (state) => {
    return state.loaded
  },
  session: (state) => {
    return state.session
  }
}

const actions = {
  load: async (context) => {
    try {
      await context.commit('loadSession')
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  },
  login: async (context, user) => {
    try {
      let result = await API.post('session', user)

      let session = {
        status: true,
        token: result.data,
        user: JWT(result.data)
      }

      context.commit('setSession', session)
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  },
  logout: async (context) => {
    try {
      await context.commit('removeSession')
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

const mutations = {
  loadSession: async (state) => {
    let session = JSON.parse(localStorage.getItem('user-session'))

    if (session) {
      API.defaults.headers['heroic-token'] = session.token
      state.session = session
    }

    state.loaded = true
    return Promise.resolve()
  },
  setSession: async (state, session) => {
    state.session = session
    localStorage.setItem('user-session', JSON.stringify(session))
    API.defaults.headers['heroic-token'] = session.token

    return Promise.resolve()
  },
  removeSession: async (state) => {
    state.session = {}
    localStorage.removeItem('user-session')
    API.defaults.headers['heroic-token'] = null

    return Promise.resolve()
  }
}

const Session = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default Session
