import WEB from './web/server'
import SQL from './sql/server'
import Root from './lib/root'
export default class Heroic {
  static Build = '3.0.0';
  static Config = {};
  static Servers = {};

  static async init (settings) {
    try {
      // Save Configuration
      Heroic.Config = settings
      Heroic.Config.Launch = Date.now()
      // Fetch Current Working Directory (CWD)
      Heroic.Config.cwd = await Root.cwd()
      // Prepare Database Modules
      await SQL.init()
      // Launch Web Server
      await WEB.init()
      // Set Time
      Heroic.Config.Launch -= Date.now()
      return `Heroic has launched on port ${Heroic.Config.http.port} ${Heroic.Config.Launch}ms`
    } catch (error) {
      return Error(error)
    }
  }
}
