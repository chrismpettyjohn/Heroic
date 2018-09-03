import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'heroic_categories'
  }

  static get visible () {
    return [
      // Columns
      'id',
      'title',
      'content',
      // Relationships
      'articles'
    ]
  }

  static get relationMappings () {
    // Dependencies
    const Articles = require('./article').default
    // Relations
    return {
      // Articles (heroic_articles)
      articles: {
        relation: Base.HasManyRelation,
        modelClass: Articles,
        join: {
          from: 'heroic_categories.id',
          to: 'heroic_articles.category_id'
        }
      }
    }
  }
}
