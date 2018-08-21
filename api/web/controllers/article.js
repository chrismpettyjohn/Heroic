import Database from '@/sql/interactors/article'
export default class Controller {
  // Fetch article
  static async read (request, reply) {
    try {
      let article = await Database.read(request.params.id, request.params.relations)
      reply.code(200).send(article)
    } catch (e) {
      reply.code(404).send()
    }
  }
}
