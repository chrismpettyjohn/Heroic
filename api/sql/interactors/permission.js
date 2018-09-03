import Model from '@/sql/models/permission'

export default class Interactor {
  // Create permission
  static async create (permission) {
    try {
      let data = await Model.query().insertAndFetch(permission)
      return Promise.resolve(data.id)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  // Fetch permission
  static async read (id, relations = '') {
    try {
      // Prepare
      let permission = {}
      // Single query or type-based
      if (!isNaN(parseInt(id))) {
        permission = await Model.query().eager(`[${relations}]`).findById(id)
      } else if (id === 'staff') {
        permission = await Model.query().eager(`[${relations}]`).where('rank_type', 'staff').orderBy('id', 'DESC')
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

  // Update permission
  static async update (permission) {
    return Model.query().where('id', permission.id).patch(permission)
  }

  // Delete permission
  static async delete (id) {
    return Model.query().where('id', id).delete()
  }
}
