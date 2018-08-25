// List
let list = {}

/* Start of Pages */

// Me
list.Me = require('./home/me').default

// Account Settings
list.Settings = require('./home/settings').default

// Profile
list.Profile = require('./home/profile').default

// Social Media
list.Social = require('./home/social').default

// Beta Information
list.Beta = require('./home/beta').default

// Client
list.Client = require('./home/client').default

// Logout
list.Logout = require('./home/logout').default

/* End of Pages */

// Export
export default list
