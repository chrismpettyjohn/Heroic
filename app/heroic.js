import WEB from './web/server'
import SQL from './sql/server'
import Root from './lib/root'
export default class Heroic {

  static Config = {}
  static Servers = {}

  constructor(settings) {
    // Save Configuration
    Heroic.Config = settings
  }

  static init() {
    return new Promise(async (resolve, reject) => {
      try {
        // Fetch Current Working Directory (CWD)
        Heroic.Config.cwd = await Root.cwd()
        // Setup Database
        new SQL()
        // Prepare Database Modules
        await SQL.init()
        // Launch Web Server
        await WEB.init()
        resolve(`Heroic has launched on port ${Heroic.Config.http.port}`)
      } catch (error) {
        reject(error)
      }
    })
  }
}