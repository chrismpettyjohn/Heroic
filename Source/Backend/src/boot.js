import Heroic from './app/heroic'
process.stdout.write('\x1B[2J')
Heroic.init()
  .then(() => {
    console.log('Heroic has launched')
  })
  .catch(error => {
    console.log(`${error}\nHeroic will now shutdown.`)
    process.exit()
  })