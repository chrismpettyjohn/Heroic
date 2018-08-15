import Random from 'randomstring'
import Model from '~/app/sql/models/user/user'
export default class User {
  // CRUD
  static create (user) {
    return Model.query().insert(user)
  }

  static read (user) {
    return new Promise(async (resolve, reject) => {
      if (typeof user === 'number') {
        user = await Model.query().eager('perm').findById(user)
        if (user) {
          resolve(user)
        } else {
          reject(Error('username'))
        }
      } else {
        user = await Model.query().eager('[perm, badges.[meta], rooms, guilds.[guild], friends]').findOne({username: user})
        if (user) {
          resolve(user)
        } else {
          reject(Error('username'))
        }
      }
    })
  }

  static update (user) {
    return Model.query().insert(user)
  }

  static delete (id) {
    return Model.query().delete().where('id', id)
  }

  // Additional Functionality

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

  static async client (id) {
    return new Promise(async (resolve, reject) => {
      // Prepare
      const key = Random.generate({
        length: 18,
        charset: 'alphabetic'
      })
      const sso = await `heroic_${key}`
      // Query
      await Model.query().findById(id)
      // Create
      await Model.query().patch({ auth_ticket: sso }).where('id', id)
      // Return
      resolve(sso)
    })
  }

  // Administrative Functionality
  static async list (query) {
    return new Promise(async (resolve, reject) => {
      // Prepare
      let users = []
      //  Newest
      if (query === 'newest') {
        users = await Model.query().orderBy('account_created', 'DESC').limit(10).select()
        resolve(users)
      } else if (query === 'richest') {
        users = await Model.query().orderBy('credits', 'DESC').limit(10).select()
        resolve(users)
      } else if (query === 'active') {
        users = await Model.query().joinEager('settings').orderBy('online_time', 'DESC').limit(10).select()
        resolve(users)
      } else {
        reject(Error('Not Valid Query'))
      }
    })
  }
}
