import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'bans'
  }

  static get visible () {
    return [
      'user_id',
      'user_staff_id',
      'timestamp',
      'ban_expire',
      'ban_reason',
      'cfh_topic'
    ]
  }
}
