import Base from '@/sql/base'
export default class Model extends Base {
  static get tableName () {
    return 'heroic_timeline_likes'
  }

  static get visible () {
    return [
      // Columns
      'id',
      'post_id',
      'user_id',
      // Relationships
      'user'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const User = require('./user').default
    // Relations
    return {
      // User (users)
      owner: {
        relation: Base.HasOneRelation,
        modelClass: User,
        join: {
          from: 'heroic_timeline_likes.user_id',
          to: 'users.id'
        }
      }
    }
  }
}
