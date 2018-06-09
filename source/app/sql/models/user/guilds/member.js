import Model from '~/app/sql/model'
export default class Members extends Model {
  static tableName = 'guilds_members';
  static visible = ['id', 'guild_id', 'user_id', 'level_id', 'member_since'];

}
