import Model from '~/app/sql/models/user'
export default class User {

  static create(user) {
    return Model.query().insertAndFetch(user)
  }

  static read(user, type) {
    if (type == 'private') {
      if (typeof user === 'number') {
        return Model.query().findById(id)
      } else {
        return Model.query().findOne({username: user})
      }
    } else {
      if (typeof user === 'number') {
        return Model.query().where('id', user).select()
      } else {
        return Model.query().where('username', user).select()
      }
    }
  }

  static update(user) {
    return Model.query().insert(user)
  }

  static delete(id) {
    return Model.query().delete().where('id', id)
  }

}
