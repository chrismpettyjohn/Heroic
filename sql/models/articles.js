import Base from '@/sql/base'
export default class Model extends Base {
  static get tableName () {
    return 'heroic_articles'
  }

  static get visible () {
    return [
      'id',
      'author_id',
      'category_id',
      'title',
      'image',
      'description',
      'content',
      'timestamp'
    ]
  }
  
}
