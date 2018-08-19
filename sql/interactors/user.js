import Model from '@/sql/models/user'
export default class Interactor {
  // Fetch user data based on username
  static async read (username) {
    try {
      let user = await Model.query().findOne({ username : username })
      if (user.id!==null) {
        return Promise.resolve(user)
      } else {
        return Promise.reject('MISSING')
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
