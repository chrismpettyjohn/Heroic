import Database from '~/app/sql/interactors/cms/news/category'
export default class Article {

  static async read(request, reply) {
    let category = await Database.read(request.params.id);
    reply.code(200).send(category)
  }

}
