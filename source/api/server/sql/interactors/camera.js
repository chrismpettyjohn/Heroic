import Model from '@/sql/models/camera'

export default class Interactor {
  // Fetch article
  static async read (id, relations = '') {
    try {
      // Prepare
      let camera = {}
      // Single query or latest
      if (!isNaN(parseInt(id))) {
        camera = await Model.query().eager(`[${relations}]`).findById(id)
      } else {
        camera = await Model.query().eager(`[${relations}]`).orderBy('id', 'DESC').limit(20)
      }
      // Results?
      if (camera) {
        return Promise.resolve(camera)
      } else {
        return Promise.reject(Error('MISSING'))
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
