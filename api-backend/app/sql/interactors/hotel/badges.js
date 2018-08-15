import Model from '~/app/sql/models/hotel/badges'
export default class Badges {
  static async read (code) {
  	return Model.query().select().where('code', code)
  }
}
