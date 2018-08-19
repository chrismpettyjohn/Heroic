import Database from '@/sql/interactors/user'
export default class Controller {

  static async read (request, reply) {
    try {
      let user = await Database.read(request.params.username)
      reply.code(200).send(user)
    } catch (e) {
      reply.code(404).send()
    }
  }

}
