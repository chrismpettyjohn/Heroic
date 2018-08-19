import Model from '@/app/sql/models/user'
export default class Interactor {
  // Fetch user data based on username
  static async read (username) {
    try {
      let user = await Model.query().where('username', username)
      if (user[0] !== null) {
        return user
      } else {
        return Error('MISSING')
      }
    } catch (e) {
      return Error(e)
    }
  }
}
