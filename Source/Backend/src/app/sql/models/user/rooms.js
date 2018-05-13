import User from './users'
import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'rooms'
  }

  owner () {
    return this.belongsTo(User, 'owner_id').query('columns', ['id', 'username', 'look'])
  } 


}
