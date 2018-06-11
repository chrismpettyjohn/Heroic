import Model from '~/app/sql/model'
export default class Rooms extends Model {
  static tableName = 'rooms';
  static visible = ['id', 'owner_id', 'owner_name', 'name', 'description', 'state', 'users', 'users_max', 'score', 'guild', 'category', 'owner'];

  // Relationships
  static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/user`,
      join: {
        from: 'rooms.owner_id',
        to: 'users.id'
      }
    }
  }
}
