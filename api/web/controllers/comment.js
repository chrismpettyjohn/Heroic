import Validator from '@/helpers/validator'
import Interactor from '@/sql/interactors/comment'
export default class Controller {
  static async create (request, reply) {
    try {
      let comment = request.body.comment
      comment.user_id = request.session.id
      await Validator.fields(comment, ['user_id', 'parent_id', 'parent_type', 'content'])
      comment.content = await Validator.filter(comment.content)
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
      let comment = request.body.comment
      comment.id = request.params.id
      comment.user_id = request.session.id
      await Validator.fields(comment, ['user_id', 'parent_id', 'parent_type', 'content'])
      await Validator.check(comment.content, 'isLength', 3)
      comment.content = await Validator.filter(comment.content)
      await Interactor.privilege(request.session.id, comment.id)
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
