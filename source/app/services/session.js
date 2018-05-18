import JWT from '~/app/lib/jwt'
import Database from '~/app/sql/interactors/session'
export default class SessionService {

  static create(user) {
    return new Promise(async (resolve, reject) => {
      let session = {};
      session = await Database.create(user);
      session = await JWT.sign(session);
      resolve(session)
    })
  }

  static read(session) {
    return new Promise(async (resolve, reject) => {
      // Validate JWT
      session = await JWT.validate(session);
      // Check Session State (Must be "allowed") and return user
      session = await Database.read(session.id, true);
      if (session) {
        resolve({session: session.id, user: session.user})
      } else {
        reject()
      }
    })
  }

  static delete(session) {
    return Database.delete(session)
  }

}
