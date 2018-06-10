import Model from '~/app/sql/models/user/guestbook'
export default class Guestbook {

  static async create (post) {
    return Model.query().insertAndFetch(post)
  }

}
