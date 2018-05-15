import Model from '../../sql/models/users'
export default class Users {

  static create(request, reply) {}

  static async read(request, reply) {
    let users = await Model.query()
    reply.code(200).send(users)
  }

  static update(request, reply) {}

  static delete(request, reply) {}

}
