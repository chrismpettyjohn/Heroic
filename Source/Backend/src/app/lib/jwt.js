import File from 'fs'
import Path from 'path'
import Token from 'jsonwebtoken'
export default class Library {

  static async sign(session) {
    const config = JSON.parse(File.readFileSync('./config.json', 'utf8')).jwt
    try {
      return Token.sign(session, config, {
        expiresIn: '24h',
        algorithm: 'HS256'
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  static async validate(session) {
    if (session) {
      try {
        return Token.verify(session, config)
      } catch (error) {
        throw new Error(error)
      }
    } else {
      throw new Error('No authentication token was provided')
    }
  }

}
