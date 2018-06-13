import File from 'fs'
import Heroic from '~/app/heroic'
export default class Standalone {
  // Check for compiled status
  static async init () {
    if (process.pkg) {
      if (!await Standalone.check()) {
        await Standalone.install()
      } else {
        console.log(' [Heroic] Launching Heroic Server')
        return true
      }
    } else {
      console.log(' [Heroic] Running from source')
      return true
    }
  }

  // Checks for dependency installation
  static async check () {
    // Notify user of current action
    console.log(' [Heroic] Checking your environment')
    // Check for node_modules
    if (File.readdirSync(`${Heroic.Config.cwd}/node_modules`)) {
      console.log(' [Heroic] Dependencies have been installed.')
      return true
    } else {
      console.log(' [Heroic] Dependencies are missing')
      return false
    }
  }

  // Installs dependencies
  static async install () {
    console.log(' [Heroic] Installing dependencies - this may take a while.')
  }
}
