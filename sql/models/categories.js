import Base from '@/sql/base'
export default class Model extends Base {
  static get tableName () {
    return 'heroic_categories'
  }

  static get visible () {
    return [
      'id',
      'title',
      'content'
    ]
  }
  
}
