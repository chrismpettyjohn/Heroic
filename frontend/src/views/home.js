// List
let list = {}

/* Start of Pages */

// Me
list.Me = require('./home/me').default

// Profile
list.Profile = require('./home/profile').default

// Logout
list.Logout = require('./home/logout').default

/* End of Pages */

// Export
export default list
