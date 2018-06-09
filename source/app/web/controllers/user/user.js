import Database from '~/app/sql/interactors/user/user'
export default class Users {

  static async create(request, reply) {
    user = await Database.create(request.body.user);
    reply.code(200).send(user)
  }

  static async read(request, reply) {
    try {
      let users = await Database.read(request.params.id);
      reply.code(200).send(users)
    } catch (error) {
      console.log(error)
    }
  }

  static async update(request, reply) {
    await Database.update(request.body.user);
    reply.code(200)
  }

  static async delete(request, reply) {
    await Database.delete(request.params.id);
    reply.code(200)
  }

}
