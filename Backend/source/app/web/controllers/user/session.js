import JWT from '~/app/lib/jwt'
import UserDB from '~/app/sql/interactors/user/user'
import SessionDB from '~/app/sql/interactors/user/session'
export default class Session {
  // Login
  static async create (request, reply) {
    try {
      // Define Variables
      let user = {}
      let session = {}
      // Find User
      user = await UserDB.read(request.body.username)
      // Check Credentials
      if (await user.verifyPassword(request.body.password)) {
        // Create Session
        session = await SessionDB.create(user)
        // Create JWT
        session = await JWT.sign({
          session: session,
          user: user
        })
        // Return
        reply.code(200).send(session)
      } else {
        reply.code(400).send('password')
      }
    } catch (error) {
      reply.code(400).send(error)
    }
  }

  static async read (request, reply) {
    let user = await UserDB.read(request.user.id)
    reply.code(200).send(user)
  }

  static async client (request, reply) {
    reply.code(200).send('beautiful')
  }
}
