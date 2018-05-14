import User from '../user/users'
import Section from './sections'
import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'cms_hangouts_posts'
  }

  author () {
    return this.belongsTo(User).query('columns', ['id', 'username', 'look', 'rank'])
  }

  section () {
    return this.belongsTo(Section).query('columns', ['id', 'title'])
  }

}
