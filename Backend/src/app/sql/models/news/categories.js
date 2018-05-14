import Articles from './articles'
import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'cms_news_categories'
  }

  articles () {
    return this.hasMany(Articles, 'category_id').query('columns', ['id', 'user_id', 'category_id', 'title', 'description', 'image', 'timestamp'])
  }

  static dependents = ['articles']

}
