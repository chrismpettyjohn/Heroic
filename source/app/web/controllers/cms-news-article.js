import Database from '~/app/sql/interactors/cms-news-article'
export default class Article {

  static async read(request, reply) {
    let articles = await Database.read(request.params.id);
    reply.code(200).send(articles)
  }

}
