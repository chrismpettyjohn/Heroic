import Model from '../../models/user/photos'
export default class Interactor {


  static async read (id) {
    try {
      if (id) {
        return Model.where('id', id).fetch({ columns : ['id', 'user_id', 'url', 'timestamp'], withRelated : ['author'] })
      } else {
        return Model.query('orderBy', 'id', 'desc').fetchAll({ columns : ['id', 'user_id', 'url', 'timestamp'], withRelated : ['author'] })
      }
    }
    catch (error) {
      throw new Error(error)
    }
  }

}
