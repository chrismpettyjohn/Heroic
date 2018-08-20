import Token from 'jsonwebtoken'
import Config from '@/config/system'
export default class JWT {
  static sign (session) {
    return Token.sign(JSON.parse(JSON.stringify(session)), Config.advanced.secret, {
      expiresIn: '1 day',
      algorithm: 'HS256'
    })
  }

  static validate (session) {
    return Token.verify(session, Config.advanced.secret)
  }

  static check (request, reply, next) {

  }
}
