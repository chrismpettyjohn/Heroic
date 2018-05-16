import Database from '~/app/sql/interactors/user'

export default class UserService {

  static login(username, password) {
    return new Promise(async (resolve, reject) => {
      let user = {}
      // Fetch User
      user = await Database.readByUsername(username)
      // Validate Login
      if (user.password == password) {
        resolve(user)
      } else {
        reject()
      }
    })
  }

  static register(username, password, mail, ip) {
    return new Promise(async (resolve, reject) => {
      try {
        // Create User
        user = await Database.create({username: username, password: password, mail: mail, ip: ip})
        // Try Login
        user = await UserService.login(username, password)
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
