import File from 'fs'
import Website from './http/server'
export default class Heroic {

  static async init() {
    const config = JSON.parse(File.readFileSync(`${process.cwd()}/config.json`, 'utf8')).http
    try {
      await Website.init(config.port)
    } catch (error) {
      throw error
    }
  }

}