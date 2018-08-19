// Dependencies
import Base from '@/sql/base'
import Password from 'objection-password-bcryptjs'

// Prepare
const password = Password()

// Code
export default class Model extends password(Base) {
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
