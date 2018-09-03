import Model from '@/sql/models/category'

export default class Interactor {
  // Fetch article
  static async read (id, relations = '') {
    try {
      // Prepare
      let category = {}
      // Individual or all
      if (!isNaN(parseInt(id))) {
        category = await Model.query().eager(`[${relations}]`).findById(id)
      } else {
        category = await Model.query().eager(`[${relations}]`).orderBy('id', 'DESC')
      }
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
