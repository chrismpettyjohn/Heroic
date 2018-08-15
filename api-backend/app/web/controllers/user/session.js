import JWT from '~/app/lib/jwt'
import Database from '~/app/sql/interactors/user/user'
export default class Session {
  static async create (request, reply) {
    try {
      // Define Variables
      let user = {}
      let session = {}
      // Find User
      user = await Database.read(request.body.username)
      // Check Credentials
      if (await user.verifyPassword(request.body.password)) {
        // Create JWT
        session = await JWT.sign(user)
        // Return
        reply.code(200).send(session)
      } else {
        reply.code(400).send('password')
      }
    } catch (error) {
      reply.code(400).send(error.message)
    }
  }
  static async read (request, reply) {
    reply.code(200).send(request.user)
  }
  static async client (request, reply) {
    let sso = await Database.client(request.user.id)
    reply.code(200).send(sso)
  }
}
