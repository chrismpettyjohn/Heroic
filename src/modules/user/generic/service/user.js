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
    try {
      if (page != 0) page--
      let users = Database.query().orderBy('id', 'ASC').page(page, 50)
      return Promise.resolve(users)
    } catch (e) {
      return Promise.reject({ error: e })
    }
  }

}

export default User