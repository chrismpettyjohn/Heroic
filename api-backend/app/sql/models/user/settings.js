import Model from '~/app/sql/model'
export default class Settings extends Model {
  static tableName = 'users_settings';
  static visible = ['id', 'user_id', 'online_time'];
}
