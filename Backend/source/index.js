// Dependencies
import Config from './config'
import Heroic from './app/heroic'
// Initialize
(async () => {
  try {
    let step = {}
    step = await Heroic.init(Config)
    console.log(step)
  } catch (error) {
    console.log(error)
    process.exit()
  }
})()
