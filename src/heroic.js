import Database from '@/database/server'
import HTTP from '@/http/server'
import Log from '@/lib/log'
import Dotenv from 'dotenv'

class Heroic {

  static root = __dirname
  static config = {}

  static async init () {
    HTTP.start()
  }

  static async loadENV (directory) {
    Heroic.config = Dotenv.config({ path: directory }).parsed
  }

  static async prepareDatabase () {
    Log.write(await Database.init())
  }

  static async prepareHTTP () {
    await HTTP.init()
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