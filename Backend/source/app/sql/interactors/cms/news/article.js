import Model from '~/app/sql/models/cms/news/article'
export default class Article {
  static async read (id) {
    if (id) {
      let article = await Model.query().findById(id).eager('[author, category]')
      if (article) {
        return article
      } else {
        return Error('No article found')
      }
    } else {
      let articles = await Model.query().eager('[author, category]')
      return articles
    }
  }
}
