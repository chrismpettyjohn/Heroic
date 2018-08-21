// List
let list = {}

// Add To List
list.Catch = require('./guest/catch').default
list.Login = require('./guest/login').default
list.Register = require('./guest/register').default

// Export
export default list
