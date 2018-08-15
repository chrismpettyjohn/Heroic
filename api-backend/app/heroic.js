import WEB from '~/app/web/server'
import SQL from '~/app/sql/server'
export default class Heroic {
  static async init (settings) {
    try {
      // Save Configuration
      Heroic.Config = settings
      Heroic.Config.Launch = Date.now()
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
