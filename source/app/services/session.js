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
    return JWT.validate(session)
  }

}
