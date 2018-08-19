import Validator from 'validator'
import Model from '@/sql/models/user'
export default class Helper {
  static async check (user) {
    if (!Validator.isAlphanumeric(user.username)) {
      return Promise.reject('Username is not valid')
    } else if (!Validator.isEmail(user.mail)) {
      return Promise.reject('Your email is not valid')
    } else if (!user.password) {
      return Promise.reject('You must have a password')
    } else {
      return Promise.resolve()
    }
  }
  static async duplicates (user) {
    // Prepare
    let status = null
    // Username
    status = await Model.query().select('id').findOne({ username: user.username })
    if (status) {
      return Promise.reject('That username is in use!')
    }
    // Email 
    status = await Model.query().select('id').findOne({ mail: user.mail })
    if (status) {
      return Promise.reject('That email is in use!')
    }
    // Return
    return Promise.resolve()
  }
}