import Model from '@/sql/models/like'
export default class Interactor {
  static async handle (user, parent, type) {
    try {
      let likes = await Model.query().where('user_id', user).andWhere('parent_id', parent).andWhere('parent_type', type)
      if (likes.length > 0) {
        return Model.query().where('user_id', user).andWhere('parent_id', parent).andWhere('parent_type', type).delete()
      } else {
        return Model.query().insert({
          user_id: user,
          parent_id: parent,
          parent_type: type
        })
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
