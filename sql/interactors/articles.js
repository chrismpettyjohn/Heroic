import Model from '@/sql/models/articles'
export default class Interactor {
  // Fetch article
  static async read (id) {
    try {
      let article = await Model.query().findById(id)
      if (article) {
        return Promise.resolve(article)
      } else {
        return Promise.reject(Error('MISSING'))
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
