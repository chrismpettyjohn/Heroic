import Interactor from '~/app/sql/interactors/cms/forum/section'
export default class Section {
  static async create (request, reply) {

  }

  static async read (request, reply) {
    let sections = await Interactor.read(request.params.id)
    reply.code(200).send(sections)
  }

  static async update (request, reply) {

  }

  static async delete (request, reply) {

  }
}
