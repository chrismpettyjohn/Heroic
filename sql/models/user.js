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
      // Columns
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
      'home_room',
      // Relationships
      'info',
      'badges'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const Info = require('./users_settings').default
    const Badges = require('./users_badges').default
    // Relations
    return {
      // Info (user_settings)
      info: {
        relation: Base.HasOneRelation,
        modelClass: Info,
        join: {
          from: 'users.id',
          to: 'users_settings.user_id'
        }
      },
      // Badges (users_badges)
      badges: {
        relation: Base.HasManyRelation,
        modelClass: Badges,
        join: {
          from: 'users.id',
          to: 'users_badges.user_id'
        }
      }
    }
  }
  
}
