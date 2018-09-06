import Interactor from '@/sql/interactors/comment'
export default class Controller {
  static async create (request, reply) {
    try {
      let comment = request.body.comment 
      comment.user_id = request.session.id
      comment = await Interactor.create(comment)
      reply.code(203).send(comment)
    } catch (e) {
      reply.code(500).send(e)
    }
  }
  static async read (request, reply) {
    try {
      let comment = await Interactor.read(request.params.id, request.params.relations)
      reply.code(203).send(comment)
    } catch (e) {
      reply.code(500).send(e)
    }
  }
  static async update (request, reply) {
    try {
      request.body.comment.id = request.params.id
      await Interactor.privilege(request.session.id, request.params.id)
      await Interactor.update(request.body.comment)
      reply.code(203).send()
    } catch (e) {
      console.log(e)
      reply.code(500).send(e)
    }
  }
  static async delete (request, reply) {
    try {
      await Interactor.privilege(request.session.id, request.params.id)
      await Interactor.delete(request.params.id)
      reply.code(203).send()
    } catch (e) {
      reply.code(500).send(e)
    }
  }
}