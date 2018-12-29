import SessionDB from '@/modules/user/session/models/session'
import UserDB from '@/modules/user/generic/models/user'
import Veracious from 'veracious'
import JWT from '@/lib/jwt'
import Bcrypt from 'bcrypt'

class Session {

  static async create (username, password) {
    try {

      const rules = {
        username: 'required|alpha_dash|exists:users,username',
        password: 'required'
      }

      let user = {
        username: username,
        password: password
      }

      await Veracious.validate(user, rules, UserDB.knex())
      user = await UserDB.query().findOne({ username: username })
      const match = await Bcrypt.compare(password, user.password)

      if (match) {

        const token = await JWT.sign(user.id)
        await SessionDB.query().insert({
          user_id: user.id,
          jwt_token: token,
          created_at: Math.floor(new Date() / 1000)
        })

        return Promise.resolve(token)

      } else {
        throw new Error('Failed to authenticate')
      }


    } catch (e) {
      return Promise.reject(e)
    }
  }

}

export default Session