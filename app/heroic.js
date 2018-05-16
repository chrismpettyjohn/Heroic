import WEB from './web/server'
import SQL from './sql/server'
import Root from './lib/root'
import Shield from './lib/shield'
export default class Heroic {

  static Build = '2.4.0';
  static Config = {}
  static Servers = {}

  constructor(settings) {
    // Save Configuration
    Heroic.Config = settings
    // Error Handler
    Heroic.Shield = Shield
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
