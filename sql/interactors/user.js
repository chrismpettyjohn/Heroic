import Model from '@/sql/models/user'
export default class Interactor {
  // Fetch user data based on username
  static async read (username) {
    try {
      let user = await Model.query().findOne({ username : username })
      console.log(user)
      if (user!== null) {
        return user
      } else {
        return Error('MISSING')
      }
    } catch (e) {
      return Error(e)
    }
  }
}
