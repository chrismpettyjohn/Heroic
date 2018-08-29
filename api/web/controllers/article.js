import Database from '@/sql/interactors/article'
export default class Controller {
  // Auth: Create new article
  static async authCreate (request, reply) {
    try {
      let article = await Database.create(request.body.article)
      reply.code(200).send(article)
    } catch (e) {
      reply.code(500).send(e)
    }
  }

  // Fetch article
  static async read (request, reply) {
    try {
      let article = await Database.read(request.params.id, request.params.relations)
      reply.code(200).send(article)
    } catch (e) {
      reply.code(404).send()
    }
  }

  // Auth: Update article
  static async authUpdate (request, reply) {
    try {
      await Database.update(request.body.article)
      reply.code(200).send()
    } catch (e) {
      reply.code(500).send(e)
    }
  }

  // Auth: Delete article
  static async authDelete (request, reply) {
    try {
      await Database.delete(request.params.id)
      reply.code(200).send()
    } catch (e) {
      reply.code(500).send(e)
    }
  }
}
