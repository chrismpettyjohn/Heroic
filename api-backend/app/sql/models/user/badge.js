import Path from 'path'
import Model from '~/app/sql/model'
export default class Badges extends Model {
  static tableName = 'users_badges';
  static visible = ['id', 'user_id', 'slot_id', 'badge_code', 'meta'];
 	// Relationships
  static relationMappings = {
    meta: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${Path.resolve(__dirname, '..', 'hotel')}/badges`,
      join: {
        from: 'users_badges.badge_code',
        to: 'badge_data.code'
      }
    }
  }
}
