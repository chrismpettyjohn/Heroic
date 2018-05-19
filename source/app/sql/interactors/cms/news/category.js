import Model from '~/app/sql/models/cms/news/category'
export default class Category {

  static async read(id) {
    if (id) {
      return Model.query().findById(id).eager('articles')
    } else {
      return Model.query().eager('articles')
    }
  }

}
