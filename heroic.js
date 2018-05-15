import Heroic from 'heroic'
import Config from './config'

new Heroic(Config)

Heroic.init()
  .then(message => {
    console.log(message)
  })
  .catch(error => {
    console.log(`Fatal Error Occured:\n${error}`)
    process.exit()
  })