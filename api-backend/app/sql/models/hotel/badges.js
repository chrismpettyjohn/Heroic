import Model from '~/app/sql/model'
export default class Badges extends Model {
  static tableName = 'badge_data'
   static visible = ['code', 'name', 'desc'];
}
