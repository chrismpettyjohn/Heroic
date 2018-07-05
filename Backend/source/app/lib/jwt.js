import Heroic from '~/app/heroic'
import Token from 'jsonwebtoken'
export default class JWT {
  static sign (session) {
    return Token.sign(JSON.parse(JSON.stringify(session)), Heroic.Config.JWT, {
      expiresIn: '2 days',
      algorithm: 'HS256'
    })
  }

  static validate (session) {
    return Token.verify(session, Heroic.Config.JWT)
  }
}
