import JWT from 'jwt-decode'
import HTTP from '@/app/utilities/http'
export default class Session {

  constructor () {
    // Modify Storage API
    Storage.prototype.setObject = function (key, value) {
      this.setItem(key, JSON.stringify(value))
    }
    Storage.prototype.getObject = function (key) {
      return JSON.parse(this.getItem(key))
    }
    // Set Header
    HTTP.defaults.headers['x-access-token'] = window.localStorage.getItem('jwt')
  }

  static create (user) {
    return new Promise((resolve, reject) => {
      if (user.username && user.password) {
        // Send to API
        HTTP.post('session', { username: user.username, password: user.password })
          .then(session => {
            // User Information
            let user = {
              jwt: session.data,
              decoded: JWT(session.data)
            }
            // Save to LocalStorage
            window.localStorage.setItem('auth', true)
            window.localStorage.setItem('jwt', user.jwt)
            window.localStorage.setObject('user', user.decoded.user)
            // Return
            resolve()
          })
          .catch(error => {
            reject(error.response.data)
          })
      } else {
        // Missing paramaters
        if (!user.username) {
          reject('username')
        } else {
          reject('password')
        }
      }
    })
  }

  async read () {

  }

  async delete () {

  }

}
