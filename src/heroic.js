import Log from '@/lib/log'
import HTTP from '@/http/server'
class Heroic {

  static root = __dirname

  static async init () {
    HTTP.start()
  }

  static async loadENV (directory) {

  }

  static async prepareDatabase () {

  }

  static async prepareHTTP () {
    Log.write(await HTTP.init())
  }

  static async loadProviders (providers) {
    return new Promise((resolve, reject) => {

      let index = 0

      providers.forEach(async (provider) => {
        try {
          provider = provider.replace('@', Heroic.root)
          await Heroic.initProvider(provider)
          index++
          if (index === providers.length) {
            Log.write(`Loaded ${index} providers`)
            resolve()
          }
        } catch (e) {
          Heroic.crash(e)
        }
      })

    })
  }

  static async initProvider (provider) {
    return new Promise(async (resolve, reject) => {
      try {
        provider = require(provider).default
        provider = await provider.init()
        return resolve(provider)
      } catch (e) {
        reject(e)
      }
    })
  }

  static async crash (e) {
    Log.write(e, 'error')
    process.exit()
  }

}

export default Heroic