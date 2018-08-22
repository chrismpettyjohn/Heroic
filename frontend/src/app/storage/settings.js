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
    }
  },
  actions: {
    init: (context) => {
      return new Promise(async (resolve, reject) => {
        // Prepare
        let config = {}
        // Fetch settings
        config.site = await API.get('heroic')
        // Format Data
        config.site = config.site.data
        // Fetch online
        config.online = await API.get('user/online')
        // Format Data
        config.online = config.online.data.length
        // Save State
        context.commit('init', config)
        // Return
        resolve(true)
      })
    }
  }
})
