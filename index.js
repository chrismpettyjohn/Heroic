import Heroic from './app/heroic'
import Config from './config'

process.stdout.write('\x1B[2J')
new Heroic(Config)

Heroic.init().then(message => {
  console.log(message)
}).catch(error => {
  console.log(`Fatal Error Occured:\n${error}`)
  process.exit()
})