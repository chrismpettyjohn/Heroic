import Log from '@/lib/log'
import Heroic from './heroic'

class Bootstrap {

  static async init () {
    Log.write('Heroic 3.1 by LeChris')
    Log.write('Bootstrapping Application')

    await Heroic.loadENV(__dirname)

    await Heroic.prepareHTTP()

    await Heroic.loadProviders([
      '@/modules/user/generic/provider/routing'
    ])

    await Heroic.init()
  }

}

Bootstrap.init()