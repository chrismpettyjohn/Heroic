import Model from '@/sql/models/user'
import Heroic from '@/sql/models/heroic'
export default class Interactor {
  // Create user
  static async create (user) {
    try {
      // Fetch Heroic Settings
      let config = await Heroic.query().findOne({ id: 1 })
      // Format User Data
      user = {
        username: user.username,
        password: user.password,
        mail: user.mail,
        account_created: Math.floor(new Date() / 1000),
        motto: config['user.motto'],
        look: config['user.look'],
        gender: config['user.gender'],
        rank: config['user.rank'],
        credits: config['user.credits'],
        pixels: config['user.pixels'],
        points: config['user.points'],
        ip_register: user.ip,
        ip_current: user.ip,
        home_room: config['user.home']
      }
      // Insert Into Database
      await Model.query().insert(user)
      // Return
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
  // Fetch user data based on username
  static async read (query, relationships = '') {
    try {
      // Parse query
      if (query.indexOf('@') > -1) {
        query = { mail: query }
      } else {
        query = { username: query }
      }
      // Find User
      let user = await Model.query().eager(`[${relationships}]`).findOne(query)
      // Does user exist?
      if (user.id !== null) {
        return Promise.resolve(user)
      } else {
        return Promise.reject(Error('MISSING'))
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
  // Login as user
  static async login (username, password) {
    try {
      // Fetch
      let user = await Interactor.read(username)
      // Verify Login
      if (await user.verifyPassword(password)) {
        return Promise.resolve(user)
      } else {
        return Promise.reject(Error('Wrong username or password'))
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
