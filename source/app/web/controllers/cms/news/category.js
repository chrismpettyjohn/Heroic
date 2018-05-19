import Database from '~/app/sql/interactors/cms/news/category'
export default class Article {

  static async create(request, reply) {}

  static async read(request, reply) {
    let category = await Database.read(request.params.id);
    reply.code(200).send(category)
  }

  static async update(request, reply) {}

  static async delete(request, reply) {

  }

}
