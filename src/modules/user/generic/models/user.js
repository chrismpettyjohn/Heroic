import Model from '@/database/model'

class User extends Model {

  static get tableName () {
    return 'users'
  }

  static get visible () {
    return [
      'id',
      'username',
      'account_created',
      'last_login',
      'last_online',
      'motto',
      'look',
      'gender',
      'rank',
      'credits',
      'pixels',
      'points',
      'online',
      'home_room'
    ]
  }

}

export default User