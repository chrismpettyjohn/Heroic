import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'rooms'
  }

  static get visible () {
    return [
      // Columns
      'id',
      'owner_id',
      'owner_name',
      'name',
      'description',
      'score',
      'users',
      'users_max',
      'guild_id',
      'tags',
      'is_public',
      'is_staff_picked',
      // Relationships
      'owner'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const User = require('./user').default
    // Relations
    return {
      // Owner (users)
      owner: {
        relation: Base.HasOneRelation,
        modelClass: User,
        join: {
          from: 'rooms.owner_id',
          to: 'users.id'
        }
      }
    }
  }
}
