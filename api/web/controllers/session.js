import Token from '@/lib/jwt'
import Interactor from '@/sql/interactors/user'
export default class Controller {
  static async create (request, reply) {
    try {
      // Try Login
      let user = await Interactor.login(request.body.username, request.body.password)
      // Sign Session
      user = Token.sign(user)
      // Return
      reply.code(200).send(user)
    } catch (e) {
      console.log(e)
      reply.code(400).send(e)
    }
  }

  static async client (request, reply) {
    reply.code(200).send('Fuck off bitch')
  }
}
