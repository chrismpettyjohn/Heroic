import File from 'fs'
import Path from 'path'
import Token from 'jsonwebtoken'
export default class Library {

  static async sign(session) {
    try {
      return Token.sign(session, '#3l4tlclxl', {
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
        return Token.verify(session, '#3l4tlclxl')
      } catch (error) {
        throw new Error(error)
      }
    } else {
      throw new Error('No authentication token was provided')
    }
  }

}