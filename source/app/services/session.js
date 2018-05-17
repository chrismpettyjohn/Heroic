import JWT from '~/app/lib/jwt'
import Database from '~/app/sql/interactors/session'
export default class SessionService {

  static create(user) {
    return new Promise(async (resolve, reject) => {
      let session = {}
      session = await Database.create(user)
      session = await JWT.sign(session)
      resolve(session)
    })
  }

  static read(session) {
    return new Promise(async (resolve, reject) => {
      // Validate JWT
      session = await JWT.validate(session)
      // Check Session State (Must be "allowed") and return user
      session = await Database.read(session.id, true)
      // Return
      resolve(session.user)
    })
  }

  static delete(session) {
    return atabase.delete(Session)
  }

}
