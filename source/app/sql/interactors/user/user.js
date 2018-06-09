import Model from '~/app/sql/models/user/user'
export default class User {

  static create(user) {
    return Model.query().insertAndFetch(user)
  }

  static read(user) {
    return new Promise(async (resolve, reject) => {
      if (user) {
        if (typeof user === 'number') {
          user = await Model.query().eager('[badges, rooms, guilds, friends]').findById(id)
          if (user) resolve(user)
          reject('No user found')
        } else {
          user = await Model.query().findOne({username: user})
          if (user) resolve(user)
          reject('No user found')
        }
      } else {
        reject('No user specified')
      }
    })
  }

  static update(user) {
    return Model.query().insert(user)
  }

  static delete(id) {
    return Model.query().delete().where('id', id)
  }

}
