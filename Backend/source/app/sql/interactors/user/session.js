import Model from '~/app/sql/models/user/session'
export default class Session {
  static create (user) {
    return Model.query().insertAndFetch({user_id: user.id})
  }
  static read (id, allowed) {
    if (allowed) {
      return Model.query().where('type', 'allowed').findById(id).eager('user')
    } else {
      return Model.query().findById(id).eager('user')
    }
  }

  static delete (id) {
    return Model.query().where('id', id).patch({type: 'blocked'})
  }
}
