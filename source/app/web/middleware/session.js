import JWT from '~/app/lib/jwt'
import SessionDB from '~/app/sql/interactors/user/session'
export default class Session {

  static async handle(request, reply, done) {
    if (request.headers['x-access-token']) {
      // Temporary Variable
      let session = {}
      // Check JWT Signature
      session = await JWT.validate(request.headers['x-access-token'])
      // Check Session State (Must be "allowed") and return user
      session = await SessionDB.read(session.session.id, true)
      // Return
      if (session) {
        // Format
        request.session = session.id
        request.user = session.user
      } else {
        reply.code(500).send('Session invalid')
      }
    } else {
      reply.code(500).send('Session required')
    }

  }

}
