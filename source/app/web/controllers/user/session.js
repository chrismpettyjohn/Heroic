import JWT from '~/app/lib/jwt'
import UserDB from '~/app/sql/interactors/user/user'
import SessionDB from '~/app/sql/interactors/user/session'
export default class Session {

  // Login
  static async create(request, reply) {
    let user = {}
    let session = {}
    // Find User
    user = await UserDB.read(request.body.username)
    // Check Credentials
    let test = await user.verifyPassword(request.body.password)
    if (await user.verifyPassword(request.body.password)) {
      // Create Session
      session = await SessionDB.create(user)
      // Create JWT
      session = await JWT.sign(session)
      // Return
      reply.code(200).send(session)
    } else {
      reply.code(500).send('Invalid credentials')
    }
  }

  static async read(request, reply) {
    // Validate JWT
    session = await JWT.validate(request.session)
    // Check Session State (Must be "allowed") and return user
    session = await SessionDB.read(session.id, true)
    // Return
    reply.code(200).send(request.session)
  }

  // Logout
  static async delete(request, reply) {
    console.log(`Controller: ${request.session}`)
    await SessionService.delete(request.session)
    reply.code(200)
  }

}
