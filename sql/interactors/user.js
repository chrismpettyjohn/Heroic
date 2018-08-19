import Model from '@/sql/models/user'
export default class Interactor {
  // Fetch user data based on username
  static async read (query) {
    try {
      // Parse query
      if (query.indexOf('@') > -1) {
        query = { mail : query }
      } else {
        query = { username : query }
      }
      // Find user
      let user = await Model.query().findOne(query)
      // Does user exist?
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
