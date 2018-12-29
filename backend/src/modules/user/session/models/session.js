import Model from '@/database/model'

class Session extends Model {

  static get tableName () {
    return 'heroic_sessions'
  }

  static get visible () {
    return [
      'id',
      'user_id',
      'status',
      'created_at',
      'expires_at'
    ]
  }

}

export default Session