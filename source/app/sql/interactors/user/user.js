import Model from '~/app/sql/models/user/user'
export default class User {
  static create (user) {
    return Model.query().insert(user)
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

  static async check (type, user) {
    // Define
    let result = null
    // Check
    if (type === 'username') {
      result = await Model.query().where('username', user).select('username')
      if (result.length > 0) {
        return Error('Username in use')
      } else {
        return 'Username is available'
      }
    } else {
      result = await Model.query().where('mail', user).select('mail')
      if (result.length > 0) {
        return Error('Email in use')
      } else {
        return 'Email is available'
      }
    }
  }
}
