// Dependencies
import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/app/api'

// Enable Storage
Vue.use(Vuex)

// Code
export default new Vuex.Store({
  state: {
    ready: false,
    site: {},
    online: 0
  },
  getters: {
    site: state => {
      return state.site
    },
    online: state => {
      return state.online
    },
    ready: state => {
      return state.ready
    }
  },
  mutations: {
    init: (state, config) => {
      state.site = config.site
      state.online = config.online
      state.ready = true
    },
    setOnline: (state, amount) => {
      state.online = amount
    }
  },
  actions: {
    init: async (context) => {
      let config = {}
      config.site = await API.get('heroic')
      config.site = config.site.data
      config.online = await API.get('user/online')
      config.online = config.online.data.length
      context.commit('init', config)
      return Promise.resolve()
    },
    fetchOnline: async (context) => {
      let online = await API.get('user/online')
      context.commit('setOnline', online.data.length)
      return Promise.resolve()
    }
  }
})
