import Log from '@/lib/log'
import SQL from '@/sql/server'
import WEB from '@/web/server'
export default class Heroic {
  static async init () {
    try {
      // Launch SQL handler
      await SQL.init()
      await SQL.test()
      // Launch WEB handler
      await WEB.init()
      // Display Launch Message
      Log.push('Heroic', 'init()', 'Heroic has launched', 'info')
    } catch (e) {
      Log.push('Heroic', 'init()', e, 'fatal')
    }
  }
}
