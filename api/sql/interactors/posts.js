import Model from '@/sql/models/posts'
export default class Interactor {
  static async create (post) {
    post.timestamp = Math.floor(new Date() / 1000)
    return Model.query().insertAndFetch(post)
  }
  static async read (id = 0, relationships = '') {
    return Model.query().eager(`[${relationships}]`).findById(id)
  }
  static async update (post) {
    return Model.query().where('id', post.id).patch(post)
  }
  static async delete (id) {
    return Model.query().where('id', id).delete()
  }
  static async privileges (user, post) {
    try {
      post = await Model.query().findById(post)
      if (post) {
        if (post.user_id === user) {
          return Promise.resolve(true)
        } else {
          return Promise.reject('User does not have privileges to this post')
        }
      } else {
        return Promise.reject('No post found')
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}