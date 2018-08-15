import JWT from '~/app/lib/jwt'
import User from '~/app/sql/interactors/user/user'
export default class Session {
  static async handle (request, reply, done) {
    if (request.headers['x-access-token']) {
      // Temporary Variable
      let session = {}
      // Check JWT Signature
      session = await JWT.validate(request.headers['x-access-token'])
      // Fetch fresh data
      session = await User.read(session.id)
      // Add to request
      request.user = session
      // Continue
    } else {
      reply.code(500).send('Session required')
    }
  }
}
