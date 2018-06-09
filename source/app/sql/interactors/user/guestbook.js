import Model from '~/app/sql/models/user/guestbook'
export default class Guestbook {

  static create (post) {
    return Model.query().insert(post)
  }

}
