import Base from '@/sql/base'
export default class Model extends Base {
  static get tableName () {
    return 'camera_web'
  }

  static get visible () {
    return [
      'id',
      'user_id',
      'room_id',
      'timestamp',
      'url'
    ]
  }
  
}
