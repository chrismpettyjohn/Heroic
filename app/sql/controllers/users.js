import {UserNotFound} from '~/app/lib/shield'
import Model from '~/app/sql/models/users'
export default class Users {

  static create() {}

  static async read(id) {
    if (id) {
      let user = await Model.query().where('id', id).select()
      if (user[0]) {
        return user[0]
      } else {
        throw new UserNotFound(id)
      }
    } else {
      return Model.query().select()
    }
  }

  static update() {}

  static delete() {}

}
