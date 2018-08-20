import Base from '@/sql/base'
export default class Model extends Base {
  static get tableName () {
    return 'rooms'
  }

  static get visible () {
    return [
      'id',
      'owner_id',
      'owner_name',
      'name',
      'description',
      'model',
      'users',
      'users_max',
      'guild_id',
      'tags',
      'is_public',
      'is_staff_picked'
    ]
  }
}
