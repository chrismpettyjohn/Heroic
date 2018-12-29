import Token from 'jsonwebtoken'
import Heroic from '@/heroic'

class JWT {

  static async sign (data) {
    return Token.sign(data, Heroic.config.JWT_TOKEN)
  }

  static async read (token) {
    return Token.verify(token, Heroic.config.JWT_TOKEN)
  }

}

export default JWT