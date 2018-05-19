import WEB from './web/server'
import SQL from './sql/server'
import Root from './lib/root'
export default class Heroic {

  static Build = '2.4.0';
  static Config = {};
  static Servers = {};

  constructor(settings) {
    // Save Configuration
    Heroic.Config = settings
    Heroic.Config.Launch = Date.now()
  }

  static init() {
    return new Promise(async (resolve, reject) => {
      try {
        // Fetch Current Working Directory (CWD)
        Heroic.Config.cwd = await Root.cwd();
        // Setup Database
        new SQL();
        // Prepare Database Modules
        await SQL.init();
        // Launch Web Server
        await WEB.init();
        // Set Time
        Heroic.Config.Launch -= Date.now()
        resolve(`Heroic has launched on port ${Heroic.Config.http.port} ${Heroic.Config.Launch}ms`)
        resolve('')
      } catch (error) {
        reject(error)
      } 
    })
  }
}
