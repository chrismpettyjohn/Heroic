import Vue from 'vue'
import Vuex from 'vuex'
import { API } from '../index'

Vue.use(Vuex)

const state = {
  loaded: false,
  settings: {},
  usersOnline: 0
}

const getters = {
  loaded: (state) => {
    return state.loaded
  },
  settings: (state) => {
    return state.settings
  },
  usersOnline: (state) => {
    return state.usersOnline
  }
}

const actions = {
  load: async (context) => {
    try {
      let result = await API.get('heroic')

      context.commit('setSettings', result.data)
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

const mutations = {
  setSettings: (state, settings) => {
    state.settings = settings
    state.loaded = true
  },
  setUsersOnline: (state, usersOnline) => {
    state.usersOnline = usersOnline
  }
}

const Settings = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default Settings
