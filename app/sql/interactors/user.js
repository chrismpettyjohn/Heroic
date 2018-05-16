import Model from '~/app/sql/models/user'
export default class User {

  static create(user) {
    return Model.query().insertAndFetch(user)
  }

  static read(id) {
    return Model.query().eager('sessions')
  }

  static readByUsername(username) {
    return Model.query().where('username', username).select()
  }

  static update(user) {
    return Model.query().insert(user)
  }

  static delete(id) {
    return Model.query().delete().where('id', id)
  }

}
