import Model from '~/app/sql/model'
export default class Member extends Model {
  static tableName = 'guilds_members';
  static visible = ['id', 'guild_id', 'user_id', 'level_id', 'member_since', 'guild'];

  // Relationships
  static relationMappings = {
    guild: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/guild`,
      join: {
        from: 'guilds_members.guild_id',
        to: 'guilds.id'
      }
    }
  }
}
