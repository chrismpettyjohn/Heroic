import Model from '@/sql/models/categories'
export default class Interactor {
  // Fetch article
  static async read (id, relations = '') {
    try {
      let category = await Model.query().eager(`[${relations}]`).findById(id)
      if (category) {
        return Promise.resolve(category)
      } else {
        return Promise.reject(Error('MISSING'))
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
