import Database from '@/sql/interactors/category'
export default class Controller {
  // Fetch article
  static async read (request, reply) {
    try {
      let category = await Database.read(request.params.id, request.params.relations)
      reply.code(200).send(category)
    } catch (e) {
      reply.code(404).send()
    }
  }
}
