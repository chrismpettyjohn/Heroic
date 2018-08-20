import Model from '@/sql/models/article'
export default class Interactor {
  // Fetch article
  static async read (id, relations = '') {
    try {
      let article = {}
      if (id!=='latest') {
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
}
