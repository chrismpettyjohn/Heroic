import Model from '~/app/sql/models/user/camera'
export default class Camera {
  static read (id) {
    if (id) {
      return Model.query().findById(id).eager('user').select()
    } else {
      return Model.query().eager('[user, room]').select()
    }
  }
}
