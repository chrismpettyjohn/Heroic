import Database from '@/modules/user/generic/models/user'
import Heroic from '@/modules/heroic/models/settings'
import Veracious from 'veracious'
import Bcrypt from 'bcrypt'

class User {

  static async create (user) {

    let rules = {
      username: 'required|min:1|max:10|alpha_dash|unique:users,username',
      password: 'required|min:1',
      mail: 'required|min:1|max:25|email'
    }

    let heroic = await Heroic.query().findById(1)

    user = {
      ...user,
      password: await Bcrypt.hash(user.password, 10),
      account_created: Math.floor(new Date() / 1000),
      motto: heroic['user.motto'],
      look: heroic['user.look'],
      gender: heroic['user.gender'],
      rank: heroic['user.rank'],
      credits: heroic['user.credits'],
      pixels: heroic['user.pixels'],
      points: heroic['user.points'],
      home_room: heroic['user.home'],
      ip_register: user.ip,
      ip_current: user.ip
    }
    delete user.ip

    try {
      await Veracious.validate(user, rules, Database.knex())
      await Database.query().insert(user)
      return Promise.resolve()
    } catch (e) {
      return Promise.reject({ error: e })
    }

  }

  static async update (user) {

    let rules = {
      id: 'required|numeric',
      username: 'min:1|max:10|alpha_dash|unique:users,username',
      password: 'min:1'
    }

    try {
      await Veracious.validate(user, rules, Database.knex)
      await Database.query().patch(user).where('id', user.id)
      return Promise.resolve()
    } catch (e) {
      return Promise.reject({ error: e })
    }

  }

  static async view (username) {
    try {
      let user = Database.query().findOne({ username: username })
      if (user) {
        return Promise.resolve(user)
      } else {
        throw new Error('User does not exist')
      }
    } catch (e) {
      return Promise.reject({ error: e })
    }
  }

  static async list (page = 0) {
    try {
      if (page != 0) page--
      let users = Database.query().orderBy('id', 'ASC').page(page, 50)
      return Promise.resolve(users)
    } catch (e) {
      return Promise.reject({ error: e })
    }
  }

  static async delete (id) {
    return Database.query().findById(id).delete()
  }

}

export default User