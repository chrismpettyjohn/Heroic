import Database from '~/app/sql/interactors/user/user'
export default class Users {
  static async read (request, reply) {
    try {
      let users = await Database.read(request.params.id)
      reply.code(200).send(users)
    } catch (error) {
      reply.code(404).send()
    }
  }
}
