import Log from '@/lib/log'
import SQL from '@/sql/server'
import WEB from '@/web/server'
export default class Heroic {
  static async init () {
    try {
      // Launch SQL handler
      let status = await SQL.init()
      console.log(`SQL INIT ${status}`)
      status = await SQL.test()
      console.log(`SQL TEST ${status}`)
      // Launch WEB handler
      status = await WEB.init()
      console.log(`WEB INIT ${status}`)
      // Display Launch Message
      Log.push('Heroic', 'init()', 'Heroic has launched', 'info')
    } catch (e) {
      Log.push('Heroic', 'init()', e, 'fatal')
    }
  }
}
