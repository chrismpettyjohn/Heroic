import Model from '../../models/news/categories'
export default class Interactor {

  static async create (data) {
    try {
      let step = await new Model(data).save()
      step     = await Model.query('orderBy', 'id', 'DESC').fetch({ columns : ['id'] })
      return Interactor.read(step.toJSON().id)
    }
    catch (error) {
      throw new Error(error)
    }
  }

  static async read (id) {
    try {
      if (id) {
        let category = await Model.where('id', id).fetch({ columns : ['id', 'title', 'timestamp'], withRelated : ['articles', 'articles.author'] })
        if (category) {
          return category
        } else {
          throw new Error('RETURN: Category not found')
        }
      } else {
        return Model.fetchAll({ columns : ['id', 'title', 'timestamp'], withRelated : ['articles'] })
      }
    }
    catch (error) {
      throw new Error(error)
    }
  }

  static update (data) {
    return new Model(data).save()
  }

  static delete (id) {
    return Model.where('id', id).destroy()
  }

}
