import Model from '~/app/sql/model'
export default class Guilds extends Model {
  static tableName = 'guilds_members';
  static visible = ['id', 'guild_id', 'user_id', 'level_id', 'member_since', 'user', 'guild'];

  // Relationships
  static relationMappings = {
    // User Data
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${Path.resolve(__dirname, '..')}/user`,
      join: {
        from: 'guilds_members.user_id',
        to: 'users.id'
      }
    }
    // Guild Data
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
