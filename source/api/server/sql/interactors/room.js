import { raw } from 'objection'
import Model from '@/sql/models/room'

export default class Interactor {
  // Fetch article
  static async read (id, relations = '') {
    try {
      // Prepare
      let room = {}
      // Single query or latest
      if (!isNaN(parseInt(id))) {
        room = await Model.query().eager(`[${relations}]`).findById(id)
      } else {
        room = await Model.query().eager(`[${relations}]`).orderBy(raw('RAND()')).limit(10)
      }
      // Results?
      if (room) {
        return Promise.resolve(room)
      } else {
        return Promise.reject(Error('MISSING'))
      }
    } catch (e) {
      console.log(e)
      return Promise.reject(e)
    }
  }
}
