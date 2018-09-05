import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'heroic_likes'
  }

  static get visible () {
    return [
      // Columns
      'id',
      'user_id',
      'parent_id',
      'parent_type',
      'type'
    ]
  }
}
