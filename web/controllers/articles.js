import Database from '@/sql/interactors/articles'
export default class Controller {
  // Fetch article
  static async read (request, reply) {
    try {
      let article = await Database.read(request.params.id)
      reply.code(200).send(article)
    } catch (e) {
      console.log(e)
      reply.code(404).send()
    }
  }
}
