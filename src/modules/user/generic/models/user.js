import Model from '@/database/model'

class User extends Model {

  static get tableName () {
    return 'users'
  }

}