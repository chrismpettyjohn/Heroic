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
    site: {}
  },
  getters: {
    site: state => {
      return state.site
    },
    ready: state => {
      return state.ready
    }
  },
  mutations: {
    init: (state, site) => {
      // Save Site
      state.site = site
      // Make Ready
      state.ready = true
    }
  },
  actions: {
    init: (context) => {
      return new Promise(async (resolve, reject) => {
        // Prepare
        let config = {}
        // Fetch API
        config = await API.get('heroic')
        // Format Data
        config = config.data
        // Save State
        context.commit('init', config)
        // Return
        resolve(true)
      })
    }
  }
})
