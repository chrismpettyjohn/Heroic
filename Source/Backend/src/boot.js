process.stdout.write('\x1B[2J')

//Config
let path = ''
if (process.pkg) {
  path = process.argv[0]
  path = path.split('/')
  path.shift()
  path.pop()
  path = `/${path.join('/')}`
} else {
  path = process.cwd()
}

global.config = require(`${path}/config.json`)


// Launch
require('./app/heroic').default.init()