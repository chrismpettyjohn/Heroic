import UserDB from '~/app/sql/interactors/user/user'
import Database from '~/app/sql/interactors/cms/news/article'
import Permission from '~/app/sql/interactors/user/permission'

export default class Article {
  // CRUD
  static async read (request, reply) {
    let articles = await Database.read(request.params.id)
    reply.code(200).send(articles)
  }

  static async update (request, reply) {
    // Check Privilege Level
    await Permission.hasLevel(4, request.user.rank)
    // Prepare
    let author = {}
    let article = request.body.article
    // Locate Author
    author = await UserDB.read(request.body.article.author.username)
    // Inject
    article.user_id = author.id
    // Save
    await Database.update(article)
    // Return
    reply.code(200).send('Changes saved')
  }

  // EXTRA
  static async query (request, reply) {
    // Prepare
    let articles = []
    // Do
    switch (request.params.query) {
      case 'search':
        articles = await Database.query(request.params.query, request.body.search)
        break
      case 'mine':
        articles = await Database.query(request.params.query, request.user.id)
        break
      default:
        articles = await Database.query(request.params.query)
        break
    }
    // Return
    reply.code(200).send(articles)
  }
}
