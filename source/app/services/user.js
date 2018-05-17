import Database from '~/app/sql/interactors/user'
export default class UserService {

  static login(username, password) {
    return new Promise(async (resolve, reject) => {
      let user = {}
      // Fetch User
      user = await Database.read(username, 'private')
      await user.verifyPassword(password)
      resolve(user)
    })
  }

  static register(username, password, mail, ip) {
    return new Promise(async (resolve, reject) => {
      try {
        // Create User
        user = await Database.create({username: username, password: password, mail: mail, ip: ip})
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  }

  static update(user) {
    return new Promise((resolve, reject) => {})
  }
}
