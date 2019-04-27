import Token from 'jsonwebtoken'
import Config from '../../config'
export default class JWT {
  static sign (session) {
    return Token.sign(JSON.parse(JSON.stringify(session)), Config.hash, {
      expiresIn: '2 days',
      algorithm: 'HS256'
    })
  }

  static validate (session) {
    try {
      return Token.verify(session, Config.hash)
    } catch (e) {
      return false
    }
  }

  static check (request, reply, done) {
    if (request.headers['heroic-token']) {
      let token = JWT.validate(request.headers['heroic-token'])
      if (token) {
        request.session = token
        done()
      } else {
        reply.code(403).send('Your session is not valid')
      }
    } else {
      reply.code(403).send('A session is required for this')
    }
  }
}
