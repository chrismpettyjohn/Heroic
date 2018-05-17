import Model from '~/app/sql/models/session'
export default class Session {

  static create(user) {
    return Model.query().insertAndFetch({user_id: user.id})
  }
  static read(id) {
    return Model.query().findById(id).eager('user')
  }

  static update(session) {
    return Model.query().findById(session.id).update(session)
  }

  static delete(id) {
    return Model.query().findById(id).update({type: 'blocked'})
  }

}
