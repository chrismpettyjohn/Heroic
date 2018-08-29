import Validator from 'validator'
import Model from '@/sql/models/user'
export default class Helper {
  static async check (user) {
    if (!Validator.isAlphanumeric(user.username)) {
      return Promise.reject(Error('username'))
    } else if (!Validator.isEmail(user.mail)) {
      return Promise.reject(Error('email'))
    } else if (!user.password) {
      return Promise.reject(Error('password'))
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
      return Promise.reject(Error('username'))
    }
    // Email
    status = await Model.query().select('id').findOne({ mail: user.mail })
    if (status) {
      return Promise.reject(Error('email'))
    }
    // Return
    return Promise.resolve()
  }

  static async staff (request, reply, next) {
    try {
      await Interactor.staff(request.session.id)
      next()
    } catch (e) {
      reply.code(403).send('Staff only!')
    }
  }


}
