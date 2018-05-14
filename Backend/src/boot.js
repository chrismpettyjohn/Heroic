// Clear Terminal
process.stdout.write('\x1B[2J')
console.log('>Running system checks')

// Dependencies
const file = require('fs')
const child = require('child_process').execSync

// Local Environment
// Configure Heroic Environment
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

// Run()
const run = function() {
  global.config = require(`${path}/config.json`)
  // Initiate Heroic
  require('./app/heroic').default.init()
}

// node_modules check
if (file.existsSync('./node_modules')) {
  run()
} else {
  // Notify User
  console.log('>Installing Dependencies')
  console.log('>This may take a minute')

  // Run Bash Commands

  child('npm install', ((error, stdout, stderr) => {
    run()
  }))

}