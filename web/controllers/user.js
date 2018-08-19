import Database from '@/sql/interactors/user'
export default class Controller {

  // CRUD Features
  static async read (request, reply) {
    try {
      let user = await Database.read(request.params.user)
      reply.code(200).send(user)
    } catch (e) {
      reply.code(404).send()
    }
  }

}
