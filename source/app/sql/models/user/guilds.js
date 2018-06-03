import Model from '~/app/sql/model'
export default class Guilds extends Model {
  static tableName = 'guilds';
  static visible = ['id', 'user_id', 'name', 'description', 'room_id', 'state', 'color_one', 'color_two', 'badge', 'date_created', 'owner', 'members'];

  // Relationships
  static relationMappings = {
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/user`,
      join: {
        from: 'guilds.user_id',
        to: 'users.id'
      }
    },
    members: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/guilds_members`,
      join: {
        from: 'guilds.id',
        to: 'guilds_members.guild_id'
      }
    }
  }
}
