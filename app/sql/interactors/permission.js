import Model from '~/app/sql/models/permission'
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

  static hasUser(rank, user) {
    return new Promise(async (resolve, reject) => {
      let rank = {}
      rank = await Model.query().findById(rank)
      rank = await rank.$relatedQuery('users').where('username', user)
      console.log(rank)
    })
  }

}
