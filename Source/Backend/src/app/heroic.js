import Website from './http/server'
export default class Heroic {

  static async init() {
    try {
      await Website.init()
      console.log(`Heroic has started on ${global.config.http.port}`)
    } catch (error) {
      console.log(`${error}\nHeroic will now shutdown.`)
      process.exit()
    }
  }

}