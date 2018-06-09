import Model from '~/app/sql/model'
export default class Badges extends Model {
  static tableName = 'user_badges';
  static visible = ['id', 'user_id', 'slot_id', 'badge_code'];

}
