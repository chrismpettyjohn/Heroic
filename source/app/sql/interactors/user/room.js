import Model from '~/app/sql/models/user/room'
export default class Room {
  static read (id) {
    if (id) {
      return Model.query().findById(id).eager('owner').select()
    } else {
      return Model.query().eager('owner').select()
    }
  }
}
