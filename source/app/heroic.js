import Root from '~/app/lib/root'
import WEB from '~/app/web/server'
import SQL from '~/app/sql/server'
import Standalone from '~/standalone'
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
      // Check Environment
      await Standalone.init()
      // Prepare Database Modules
      await SQL.init()
      // Launch Web Server
      await WEB.init()
      // Set Time
      Heroic.Config.Launch -= Date.now()
      // Return
      return ` [Heroic] Web server has launched on port ${Heroic.Config.http.port} ${Heroic.Config.Launch}ms`
    } catch (error) {
      return Error(error)
    }
  }
}
