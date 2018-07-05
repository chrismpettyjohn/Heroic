import Model from '~/app/sql/model'
export default class Session extends Model {
  static tableName = 'heroic_sessions';
  static visible = ['id', 'user_id', 'type', 'created_at', 'ended_at'];

  // Relationships
  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/user`,
      join: {
        from: 'heroic_sessions.user_id',
        to: 'users.id'
      }
    }
  }
}
