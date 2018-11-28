import Database from '@/modules/user/generic/models/user'

class User {

  static async view (id) {
    try {
      let user = Database.query().findById(id)
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