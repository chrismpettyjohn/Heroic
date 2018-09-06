import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'heroic_posts'
  }

  static get visible () {
    return [
      // Columns
      'id',
      'user_id',
      'content',
      'timestamp',
      // Relationships
      'author',
      'comments',
      'likes'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const User = require('./user').default
    const Comments = require('./comment').default
    const Likes = require('./like').default
    // Relations
    return {
      // Author (users)
      author: {
        relation: Base.HasOneRelation,
        modelClass: User,
        join: {
          from: 'heroic_posts.user_id',
          to: 'users.id'
        }
      },
      comments: {
        relation: Base.HasManyRelation,
        modelClass: Comments,
        join: {
          from: 'heroic_posts.id',
          to: 'heroic_comments.parent_id'
        },
        modify: {
          parent_type: 'status'
        }
      },
      likes: {
        relation: Base.HasManyRelation,
        modelClass: Likes,
        join: {
          from: 'heroic_posts.id',
          to: 'heroic_likes.parent_id'
        },
        modify: {
          parent_type: 'status'
        }
      }
    }
  }
}
