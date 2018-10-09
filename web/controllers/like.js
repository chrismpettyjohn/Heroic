import Interactor from '@/sql/interactors/like'
export default class Controller {
  static async handle (request, reply) {
    try {
      await Interactor.handle(request.session.id, request.params.parent, request.params.type)
      reply.code(203).send()
    } catch (e) {
      reply.code(500).send(e)
    }
  }
}
