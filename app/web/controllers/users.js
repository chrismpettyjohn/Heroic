import Database from '~/app/sql/controllers/users'
import Service from '~/app/services/user'
export default class Users {

  // CRUD
  static async create(request, reply) {
    user = await Database.create(request.body.user)
    reply.code(200).send(user)
  }

  static async read(request, reply) {
    let users = await Database.read(request.params.id)
    reply.code(200).send(users)
  }

  static async update(request, reply) {
    await Database.update(request.body.user)
    reply.code(200)
  }

  static async delete(request, reply) {
    await Database.delete(request.params.id)
    reply.code(200)
  }

  // Services
  static async login(request, reply) {
    let session = await Service.login(request.body.username, request.body.password)
    reply.code(200).send(session)
  }

  static async register(request, reply) {
    let session = {}
    session = await Service.register(request.body.username, request.body.password)
    session = await Service.login(request.body.username, request.body.password)
    reply.code(200).send(session)
  }

}
