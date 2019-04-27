import Model from '@/sql/models/heroic'

export default class Interactor {
  // Fetch settings
  static async read () {
    try {
      let settings = await Model.query().findOne({ id: 1 })
      return Promise.resolve(settings)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
