import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'heroic_comments'
  }

  static get visible () {
    return [
      // Columns
      'id',
      'parent_id',
      'parent_type',
      'user_id',
      'content',
      'timestamp',
      // Relationships
      'author',
      'replies',
      'likes'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const User = require('./user').default
    const Likes = require('./like').default
    // Relations
    return {
      // Author (users)
      author: {
        relation: Base.HasOneRelation,
        modelClass: User,
        join: {
          from: 'heroic_comments.user_id',
          to: 'users.id'
        }
      },
      replies: {
        relation: Base.HasManyRelation,
        modelClass: Model,
        join: {
          from: 'heroic_comments.id',
          to: 'heroic_comments.parent_id'
        },
        modify: {
          parent_type: 'comment'
        }
      },
      likes: {
        relation: Base.HasManyRelation,
        modelClass: Likes,
        join: {
          from: 'heroic_comments.id',
          to: 'heroic_likes.parent_id'
        },
        modify: {
          parent_type: 'comment'
        }
      }
    }
  }
}
