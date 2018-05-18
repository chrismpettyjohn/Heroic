import Website from './http/server'
export default class Heroic {

  static async init() {
    try {
      // Website Service
      await Website.init()
      // Emulator Service
      console.log(`>Heroic ${global.version} has started on ${global.config.http.port}`)
    } catch (error) {
      console.log(`${error}\nHeroic will now shutdown.`)
      process.exit()
    }
  }

}