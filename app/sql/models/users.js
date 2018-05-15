import {Model} from 'objection'
export default class Users extends Model {

  static get tableName() {
    return 'users'
  }

}
