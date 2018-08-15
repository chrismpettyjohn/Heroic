import Model from '~/app/sql/models/cms/forum/post'
export default class Post {
  static create (post) {
    return Model.query().insertAndFetch(post)
  }

  static update (post, id) {
    return Model.query().update(post).where('id', id)
  }

  static async read (id) {
    let post = await Model.query().findById(id).eager('[author, section, replies.[author]]').select()
    if (post) {
      return post
    } else {
      return new Error('Post not found')
    }
  }

  static delete (id) {
    return Model.query().deleteById(id)
  }
}
