// List
let list = {}

// Add To List
list.Catch = require('./guest/catch').default
list.Parent = require('./guest/parent').default
list.Login = require('./guest/login').default
list.Register = require('./guest/register').default

// Export
export default list
