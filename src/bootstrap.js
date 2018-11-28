import Heroic from './heroic'
import Log from '@/lib/log'
import Path from 'path'

class Bootstrap {

  static async init () {
    try {
      Log.write('Heroic 3.1 by LeChris')
      Log.write('Bootstrapping Application')

      await Heroic.loadENV(Path.resolve(__dirname, '..', '.env'))

      await Heroic.prepareDatabase()
      await Heroic.prepareHTTP()

      await Heroic.loadProviders([
        '@/modules/user/generic/provider/routing'
      ])

      await Heroic.init()
    } catch (e) {
      Heroic.crash(e)
    }
  }

}

Bootstrap.init()