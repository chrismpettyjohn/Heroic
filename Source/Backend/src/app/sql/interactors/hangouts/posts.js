import Model from '../../models/hangouts/posts'
export default class Interactor {

  static async read (id) {
    try {
      if (id) {
        return Model.where('id', id).fetch({ columns : ['id', 'user_id', 'section_id', 'title', 'content', 'image', 'status', 'timestamp'], withRelated : ['section', 'author'] })
      } else {
        return Model.query('orderBy', 'id', 'DESC').fetch({ columns : ['id', 'user_id', 'section_id', 'title', 'description', 'image', 'status', 'timestamp'], withRelated : ['section', 'author'] })
      }
    }
    catch (error) {
      throw new Error(error)
    }
  }

}
