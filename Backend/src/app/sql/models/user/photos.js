import User from '../user/users'
import Database from  '../../server'
export default class Model extends Database.Model {

  get tableName () {
    return 'camera_web'
  }

  author () {
    return this.belongsTo(User).query('columns', ['id', 'username', 'look', 'rank'])
  }


}
