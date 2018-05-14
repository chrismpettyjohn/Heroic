import Error from '../../../lib/error'
import Authentication from '../../../lib/jwt'
import Database from '../../../sql/interactors/user/users'
export default class Controller {

  static async create(request, reply) {
    try {
      let session = await Database.login(request.body.username, request.body.password)
      session = await Database.read(session, 'id', true)
      session = await Authentication.sign(session)
      reply.code(200).send(session)
    } catch (error) {
      new Error(error, request, reply)
    }
  }

  static async read(request, reply) {
    try {
      let session = await Database.read(request.raw.session.id, 'id', true)
      if (session.bans.length > 0) {
        reply.code(200).send({
          error: 'banned'
        })
      } else {
        reply.code(200).send(session)
      }
    } catch (error) {
      new Error(error, request, reply)
    }
  }

  static async client(request, reply) {
    try {
      let sso = await Database.client(request.raw.session.id)
      reply.code(200).send(sso)
    } catch (error) {
      new Error(error, request, reply)
    }
  }

}