import Token from '../../lib/jwt'
import Error from '../../lib/error'
import Ranks from '../../sql/interactors/user/ranks'
export default class Middleware {

  static async check(request, reply, next) {
    try {
      request.session = await Token.validate(request.headers['x-access-token'])
      next()
    } catch (error) {
      next({
        error: 'Could not authorize this request'
      })
    }
  }

  static async checkMod(request, reply, next) {
    try {
      let validate = await Ranks.hasRank(request.session.rank.id, 'mod')
      next()
    } catch (error) {
      next({
        error: 'Could not authorize this request'
      })
    }
  }

  static async checkAdmin(request, reply, next) {
    try {
      let validate = await Ranks.hasRank(request.session.rank.id, 'admin')
      next()
    } catch (error) {
      next({
        error: 'Could not authorize this request'
      })
    }
  }

}