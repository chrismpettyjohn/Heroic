import Model from '~/app/sql/model'
export default class Guilds extends Model {
  static tableName = 'guilds_members';
  static visible = ['id', 'guild_id', 'user_id', 'level_id', 'member_since', 'user'];

  // Relationships
  static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/user`,
      join: {
        from: 'guilds_members.user_id',
        to: 'users.id'
      }
    }
  }

}
