import User from '../user/users'
import Category from './categories'
import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'cms_news_articles'
  }

  author () {
    return this.belongsTo(User).query('columns', ['id', 'username', 'look', 'rank'])
  }

  category () {
    return this.belongsTo(Category, 'category_id').query('columns', ['id', 'title'])
  }

}
