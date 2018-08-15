import Model from '~/app/sql/model'
export default class Guestbook extends Model {
  static tableName = 'heroic_guestbook';
  static visible = ['id', 'profile_id', 'user_id', 'content', 'created_at', 'author'];

  // Relationships
  static relationMappings = {
    author: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/user`,
      join: {
        from: 'heroic_guestbook.user_id',
        to: 'users.id'
      }
    }
  }
}
