import Model from '../../sql/models/users'
export default class Users {

  static create() {}

  static read() {
    return Model.query().select(Model.columns.public)
  }

  static update() {}

  static delete() {}

}
