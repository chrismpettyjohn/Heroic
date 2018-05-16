import Delusion from '~/app/lib/delusion'
import Model from '~/app/sql/models/users'
export default class Users {

  static async create(user) {
    try {
      let user = await Model.query().insert(user)
      return user
    } catch (error) {
      throw new Delusion(1, error)
    }
  }

  static async read(id) {
    if (id) {
      let user = await Model.query().where('id', id).select()
      return user[0]
    } else {
      return Model.query().select()
    }
  }

  static update() {}

  static delete() {}

}
