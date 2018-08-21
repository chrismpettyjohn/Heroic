import Model from '@/sql/models/permission'
export default class Interactor {
  // Fetch permission
  static async read (id, relations = '') {
    try {
      // Prepare
      let permission = {}
      // Single query or type-based
      if (!isNaN(parseInt(id))) {
        permission = await Model.query().eager(`[${relations}]`).findById(id)
      } else if (id === 'staff') {
        permission = await Model.query().eager(`[${relations}]`).where('acc_staff_chat', '1').orderBy('id', 'DESC')
      } else if (id === 'vip') {
        permission = await Model.query().eager(`[${relations}]`).where('level', '2').orderBy('id', 'DESC')
      }
      // Does permission exist?
      if (permission) {
        return Promise.resolve(permission)
      } else {
        return Promise.reject(Error('MISSING'))
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
