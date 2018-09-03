import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'heroic_articles'
  }

  static get visible () {
    return [
      // Columns
      'id',
      'author_id',
      'category_id',
      'title',
      'image',
      'description',
      'content',
      'timestamp',
      // Relationships
      'author',
      'category'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const User = require('./user').default
    const Category = require('./category').default
    // Relations
    return {
      // Author (users)
      author: {
        relation: Base.HasOneRelation,
        modelClass: User,
        join: {
          from: 'heroic_articles.author_id',
          to: 'users.id'
        }
      },
      // Category (heroic_categories)
      category: {
        relation: Base.HasOneRelation,
        modelClass: Category,
        join: {
          from: 'heroic_articles.category_id',
          to: 'heroic_categories.id'
        }
      }
    }
  }
}
