import Database from '../../sql/controllers/users'
export default class Users {

  static create(request, reply) {}

  static async read(request, reply) {
    let users = await Database.read()
    reply.code(200).send(users)
  }

  static update(request, reply) {}

  static delete(request, reply) {}

}
