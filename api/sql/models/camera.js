import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'camera_web'
  }

  static get visible () {
    return [
      // Columns
      'id',
      'user_id',
      'room_id',
      'timestamp',
      'url',
      // Relationships
      'author'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const User = require('./user').default
    // Relations
    return {
      // Author (users)
      author: {
        relation: Base.HasOneRelation,
        modelClass: User,
        join: {
          from: 'camera_web.user_id',
          to: 'users.id'
        }
      }
    }
  }
}
