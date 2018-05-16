import Model from '../../sql/models/users'
export default class Users {

  static create() {}

  static read() {
    return Model.query().select(Model.columns.private)
  }

  static update() {}

  static delete() {}

}
