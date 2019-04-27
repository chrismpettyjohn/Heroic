import Base from '@/sql/base'

export default class Model extends Base {
  static get tableName () {
    return 'users_settings'
  }

  static get visible () {
    return [
      'id',
      'user_id',
      'respects_given',
      'respects_received',
      'guild_id',
      'cfh_send',
      'cfh_abusive',
      'cfh_warnings',
      'cfh_bans',
      'online_time',
      'tags',
      'hof_points'
    ]
  }
}
