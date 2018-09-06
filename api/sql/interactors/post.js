import Model from '@/sql/models/post'
export default class Interactor {
  static async create (post) {
    post.timestamp = Math.floor(new Date() / 1000)
    return Model.query().insertAndFetch(post)
  }
  static async read (id = 0, relationships = '') {
    try {
      let post = await Model.query().eager(`[${relationships}]`).findById(id)
      if (post) {
        return Promise.resolve(post)
      } else {
        throw new Error('Post does not exist')
      }
    } catch (e) {
      return Promise.reject(e)
    }
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
          throw new Error('User does not have privileges to this post')
        }
      } else {
        throw new Error('No post found')
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
