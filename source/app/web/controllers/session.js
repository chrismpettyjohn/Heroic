import UserService from '~/app/services/user'
import SessionService from '~/app/services/session'
export default class Session {

  // Login
  static async create(request, reply) {
    let session = {}
    session = await UserService.login(request.body.username, request.body.password)
    session = await SessionService.create(session)
    reply.code(200).send(session)
  }

  static async read(request, reply) {
    reply.code(200).send(request.session)
  }

  // Logout
  static async delete(request, reply) {
    await SessionService.delete(request.session)
    reply.code(200)
  }

}
