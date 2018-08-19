import Base from '@/app/sql/base'
export default class Model extends Base {
  static get tableName () {
    return 'users'
  }

  static get visible () {
    return [
      'id',
      'username',
      'mail_verified',
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
