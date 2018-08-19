// Dependencies
import Server from '@/web/server'
export default class Routing {
  static async init() {
    await Server.route('GET', 'user/:username','User@read')
  }
}