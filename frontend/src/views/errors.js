// List
let list = {}

/* Start of Pages */

// Photos
list.NotFound = require('./errors/404').default
list.System = require('./errors/500').default

/* End of Pages */

// Export
export default list
