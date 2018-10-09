import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'users_badges'
  }

  static get visible () {
    return [
      'user_id',
      'slot_id',
      'badge_code'
    ]
  }
}
