import Model from '~/app/sql/models/cms/news/article'
export default class Article {

  static async read(id) {
    if (id) {
      return Model.query().findById(id).eager('author', 'category')
    } else {
      return Model.query().eager('author', 'category')
    }
  }

}
