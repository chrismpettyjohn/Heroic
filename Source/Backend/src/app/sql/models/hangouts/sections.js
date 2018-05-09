import Posts from './posts'
import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'cms_hangouts_sections'
  }

   posts () {
    return this.hasMany(Posts).query('columns', ['id', 'user_id', 'section_id', 'title', 'description', 'image', 'timestamp'])
  }

}
