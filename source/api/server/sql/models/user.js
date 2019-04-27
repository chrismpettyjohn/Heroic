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
      'camera',
      'friends',
      'info',
      'rooms',
      'permission'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const Badges = require('./users_badges').default
    const Bans = require('./bans').default
    const Camera = require('./camera').default
    const Friends = require('./friend').default
    const Info = require('./users_settings').default
    const Rooms = require('./room').default
    const Permission = require('./permission').default
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
      // Camera (camera_web)
      camera: {
        relation: Base.HasManyRelation,
        modelClass: Camera,
        join: {
          from: 'users.id',
          to: 'camera_web.user_id'
        }
      },
      // Friends (messenger_friendships)
      friends: {
        relation: Base.HasManyRelation,
        modelClass: Friends,
        join: {
          from: 'users.id',
          to: 'messenger_friendships.user_one_id'
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
      // Permission(permissions)
      permission: {
        relation: Base.HasOneRelation,
        modelClass: Permission,
        join: {
          from: 'users.rank',
          to: 'permissions.id'
        }
      },
      // Rooms (rooms)
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
