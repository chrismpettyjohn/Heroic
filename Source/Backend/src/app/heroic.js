import File from 'fs'
import Website from './http/server'
export default class Heroic {

  static async init() {
    Website.init()
  }

}
