import Database from '@/modules/user/generic/models/user'

class User {

  static async view (username) {
    try {
      let user = Database.query().findOne({ username: username })
      if (user) {
        return Promise.resolve(user)
      } else {
        throw new Error('User does not exist')
      }
    } catch (e) {
      return Promise.reject({ error: e })
    }
  }

  static async list (page = 0) {

  }

}

export default User