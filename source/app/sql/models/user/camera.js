import Model from '~/app/sql/model'
export default class Camera extends Model {
  static tableName = 'camera_web';
  static visible = ['id', 'user_id', 'room_id', 'timestamp', 'url', 'user', 'room'];

  // Relationships
  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/user`,
      join: {
        from: 'camera_web.user_id',
        to: 'users.id'
      }
    },
    room: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/room`,
      join: {
        from: 'camera_web.room_id',
        to: 'rooms.id'
      }
    }
  }
}
