import Model from '@/sql/models/article'

export default class Interactor {
  // Create article
  static async create (article) {
    try {
      article.timestamp = Math.floor(new Date() / 1000)
      let result = await Model.query().insertAndFetch(article)
      return Promise.resolve(result.id)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  // Fetch article
  static async read (id, relations = '') {
    try {
      let article = {}
      if (!isNaN(parseInt(id))) {
        article = await Model.query().eager(`[${relations}]`).findById(id)
      } else {
        article = await Model.query().eager(`[${relations}]`).orderBy('id', 'DESC').limit(10).select()
      }
      if (article) {
        return Promise.resolve(article)
      } else {
        return Promise.reject(Error('MISSING'))
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }

  // Update article
  static async update (article) {
    return Model.query().where('id', article.id).patch(article)
  }

  // Delete article
  static async delete (id) {
    return Model.query().where('id', id).delete()
  }
}
