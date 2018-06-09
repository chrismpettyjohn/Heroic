import Model from '~/app/sql/model'
export default class Friendship extends Model {
  static tableName = 'messenger_friendships';
  static visible = ['id', 'user_one_id', 'user_two_id', 'relation', 'friends_since', 'user'];

  // Relationships
  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/user`,
      join: {
        from: 'messenger_friendships.user_two_id',
        to: 'users.id'
      }
    }
  }
}
