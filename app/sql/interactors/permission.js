import Model from '~/app/sql/models/permission'
export default class Permission {

  static read(id) {
    if (id) {
      return Model.query().where('id', id).eager('users').select()
    } else {
      return Model.query().eager('users').select()
    }
  }

  static readByType(type) {
    return Model.query().applyFilter(type).eager(`users`).select()
  }

}
