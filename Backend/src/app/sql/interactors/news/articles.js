import Model from '../../models/news/articles'
export default class Interactor {

  static async create (data) {
    try {
      let step = await new Model(data).save()
      step     = await Model.query('orderBy', 'id', 'DESC').fetch({ columns : ['id'] })
      step     = await Interactor.read(step.toJSON().id)
      return step
    }
    catch (error) {
      throw new Error(error)
    }
  }

  static async update (data) {
    return new Model(data).save()
  }

  static async read (id) {
    try {
      if (id) {
        let article = await Model.where('id', id).fetch({ columns : ['id', 'user_id', 'category_id', 'title', 'description', 'content', 'image', 'timestamp'], withRelated : ['author', 'category'] })
        if (article) {
          return article
        } else {
          throw new Error('RETURN: Article not found')
        }
      } else {
        return Model.query('orderBy', 'id', 'DESC').fetchAll({ columns : ['id', 'user_id', 'category_id', 'title', 'description', 'image', 'timestamp'], withRelated : ['author', 'category'] })
      }
    }
    catch (error) {
      throw new Error(error)
    }
  }

  static async delete (id) {
    try {
      let step = await Interactor.read(id)
      step     = await Model.where('id', id).destroy()
      return true
    }
    catch (error) {
      throw new Error(error)
    }
  }

}
