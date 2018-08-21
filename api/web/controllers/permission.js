import Database from '@/sql/interactors/permission'
export default class Controller {
  // Fetch permission
  static async read (request, reply) {
    try {
      let permission = await Database.read(request.params.id, request.params.relations)
      reply.code(200).send(permission)
    } catch (e) {
      reply.code(404).send()
    }
  }
}
