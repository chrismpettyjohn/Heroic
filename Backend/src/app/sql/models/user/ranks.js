import Users from './users'
import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'permissions'
  }

  users () {
    return this.hasMany(Users, 'rank').query('columns', ['id', 'username', 'look', 'rank', 'online' ])
  }  

}
