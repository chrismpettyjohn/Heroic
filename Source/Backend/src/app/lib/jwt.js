import File from 'fs'
import Path from 'path'
import Token from 'jsonwebtoken'
export default class Library {

  static async sign (session) {
    try {
      return Token.sign(session, File.readFileSync(Path.resolve(__dirname, '..', 'config', 'https', 'key.pem')), {
          expiresIn: '24h',
          algorithm: 'HS256'
        })
    }
    catch (error) {
      throw new Error(error)
    }
  }

  static async validate (session) {
    if (session) {
      try {
        return Token.verify(session, File.readFileSync(Path.resolve(__dirname, '..', 'config', 'https', 'key.pem')))
      }
      catch (error) {
        throw new Error(error)
      }
    } else {
      throw new Error('No authentication token was provided')
    }
  }

}
