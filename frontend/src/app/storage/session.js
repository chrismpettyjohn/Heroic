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
  	}
  },
  mutations: {
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
    // Login
  	start: (context, user) => {
  		return new Promise(async (resolve, reject) => {
  			try {
  				// Contact API
  				let result = await API.post('session', user)
  				// Save JWT
  				context.commit('setToken', result.data)
  				// Save User
  				context.commit('setUser', JWT(result.data))
  				// Set Active
  				context.commit('setActive', 'true')
          // Add Header to Axios
          API.defaults.headers['heroic-token'] = result.data
  				// Return
  				resolve(true)
  			} catch (e) {
  				reject(e)
  			}
  		})
  	},
    // Logout
    logout: (context) => {
      return new Promise(async (resolve, reject) => {
        // Remove JWT
        context.commit('setToken', null)
        // Remove User
        context.commit('setUser', null)
        // Change Active
        context.commit('setActive', false)
        // Resolve
        resolve(true)
      })
    },
    // Fetch session from storage
    init: (context) => {
      return new Promise(async (resolve, reject) => {
        await context.commit('init')
        resolve()
      })
    }
  }
})
