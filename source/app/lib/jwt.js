import Heroic from '~/app/heroic'
import Token from 'jsonwebtoken'
export default class JWT {

  static sign(session) {
    return Token.sign(session, Heroic.Config.JWT, {
      expiresIn: '12h',
      algorithm: 'HS256'
    })
  }

  static validate(session) {
    return Token.verify(session, Heroic.Config.JWT)
  }
}
