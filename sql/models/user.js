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
      'badges',
      'bans',
      'info',
      'rooms'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const Badges = require('./users_badges').default
    const Bans = require('./bans').default
    const Info = require('./users_settings').default
    const Rooms = require('./rooms').default
    // Relations
    return {
      // Bans (bans)
      bans: {
        relation: Base.HasOneRelation,
        modelClass: Bans,
        join: {
          from: 'users.id',
          to: 'bans.user_id'
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
      },
      // Info (user_settings)
      info: {
        relation: Base.HasOneRelation,
        modelClass: Info,
        join: {
          from: 'users.id',
          to: 'users_settings.user_id'
        }
      },
      rooms: {
        relation: Base.HasManyRelation,
        modelClass: Rooms,
        join: {
          from: 'users.id',
          to: 'rooms.owner_id'
        }
      }
    }
  }
}
