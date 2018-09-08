import Model from '@/sql/models/comment'
export default class Interactor {
  static async create (comment) {
    comment.timestamp = Math.floor(new Date() / 1000)
    return Model.query().insertAndFetch(comment)
  }
  static async read (id, relations = '') {
    try {
      let comment = await Model.query().eager(`[${relations}]`).findById(id)
      if (comment) {
        return Promise.resolve(comment)
      } else {
        throw new Error('Comment not found')
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
  static async update (comment) {
    return Model.query().where('id', comment.id).patch(comment)
  }
  static async delete (comment) {
    return Model.query().where('id', comment).delete()
  }
  static async privilege (user, comment) {
    try {
      comment = await Model.query().findById(comment)
      if (comment) {
        if (comment.user_id === user) {
          return Promise.resolve()
        } else {
          throw new Error('User does not have privileges to this post')
        }
      } else {
        throw new Error('Comment does not exist')
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
