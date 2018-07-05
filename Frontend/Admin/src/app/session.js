import API from '@/app/api'
import JWT from 'jwt-decode'
export default class Session {
  constructor () {
    // Modify Storage API
    Storage.prototype.setObject = function (key, value) {
      this.setItem(key, JSON.stringify(value))
    }
    Storage.prototype.getObject = function (key) {
      return JSON.parse(this.getItem(key))
    }
    // Set X-Access-Token Header
    API.defaults.headers['x-access-token'] = localStorage.getItem('jwt')
  }

  // Helper Functions
  static async login (user) {
    return new Promise((resolve, reject) => {
      API.post('session', user)
        .then(session => {
          // Save
          localStorage.setItem('jwt', session.data)
          localStorage.setObject('user', JWT(session.data).user)
          // Return
          resolve()
        })
        .catch(error => {
          reject(error.response.data)
        })
    })
  }

  async read () {
    return new Promise((resolve, reject) => {
      API.get('session')
        .then(session => {
          resolve(session.data)
        })
        .catch(error => {
          reject(error.response)
        })
    })
  }

  static async exists () {
    return new Promise((resolve, reject) => {
      API.get('session')
        .then(session => {
          // Update 
          localStorage.setObject('user', session.data)
          // Return
          resolve()
        })
        .catch(error => {
          reject(error.response)
        })
    })
  }
  static async level (level) {
    return new Promise ((resolve, reject) => {
      if (level) {
        const user = localStorage.getObject('user').perm.level 
        if (user >= level) {
          resolve()
        } else {
          reject('Permissions must be upgraded to view this area.')
        }
      } else {
        resolve()
      }
    })
  }

  // Middleware
  static async check (to, from, next) {
    if (to.meta.page) {
      try {
        await Session.exists()
        await Session.level(to.meta.level)
        next()
      } catch (error) {
        next({ name: 'System.Errors.Session' })
      }
    } else {
      next()
    }
  }
}
