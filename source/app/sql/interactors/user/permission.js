import Model from '~/app/sql/models/user/permission'
export default class Permission {

  static read(id) {
    if (id) {
      return Model.query().findById(id).eager('users').select()
    } else {
      return Model.query().eager('users').select()
    }
  }

  static readByType(type) {
    return Model.query().applyFilter(type).eager(`users`).select()
  }

  static hasLevel(level, rank) {
    return new Promise(async (resolve, reject) => {
      rank = await Model.query().where('level', '>=', level).where('id', rank).select('id');
      if (rank[0]) {
        resolve()
      } else {
        reject('User does not have escalated privileges')
      }
    })
  }

}
