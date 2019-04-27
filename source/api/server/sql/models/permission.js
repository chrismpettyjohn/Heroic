import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'permissions'
  }

  static get visible () {
    return [
      // Columns
      'id',
      'rank_name',
      'rank_desc',
      'rank_type',
      'prefix',
      // Relationships
      'users'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const User = require('./user').default
    // Relations
    return {
      // Users (users)
      users: {
        relation: Base.HasManyRelation,
        modelClass: User,
        join: {
          from: 'permissions.id',
          to: 'users.rank'
        }
      }
    }
  }
}
