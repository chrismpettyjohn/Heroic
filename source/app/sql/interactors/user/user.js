import Model from '~/app/sql/models/user/user'
export default class User {
  static create (user) {
    return Model.query().insertAndFetch(user)
  }

  static async read (user) {
    if (typeof user === 'number') {
      user = await Model.query().eager('[badges, rooms, guilds, guilds.guild, friends, guestbook, guestbook.author]').findById(user)
      if (user) {
        return user
      } else {
        return Error('User not found')
      }
    } else {
      user = await Model.query().eager('[badges, rooms, guilds, guilds.guild, friends, guestbook, guestbook.author]').findOne({username: user})
      if (user) {
        return user
      } else {
        return Error('User not found')
      }
    }
  }

  static update (user) {
    return Model.query().insert(user)
  }

  static delete (id) {
    return Model.query().delete().where('id', id)
  }
}
