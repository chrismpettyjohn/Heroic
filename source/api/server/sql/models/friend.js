import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'messenger_friendships'
  }

  static get visible () {
    return [
      // Columns
      'user_one_id',
      'user_two_id',
      'relation',
      'friends_since',
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
      user: {
        relation: Base.HasOneRelation,
        modelClass: User,
        join: {
          from: 'messenger_friendships.user_two_id',
          to: 'users.id'
        }
      }
    }
  }
}
