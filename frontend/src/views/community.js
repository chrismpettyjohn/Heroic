// List
let list = {}

/* Start of Pages */

// Photos
list.Photos = {}
list.Photos.List = require('./community/photos/list').default
list.Photos.View = require('./community/photos/view').default

// Rooms
list.Rooms = {}
list.Rooms.List = require('./community/rooms/list').default
list.Rooms.View = require('./community/rooms/view').default

// News
list.News = {}
list.News.Latest = require('./community/news/latest').default
list.News.Category = require('./community/news/category').default
list.News.Article = require('./community/news/article').default

// Staff
list.Staff = require('./community/staff').default

// Online
list.Online = require('./community/online').default

// Leaderboards
list.Leaderboards = require('./community/leaderboards').default

/* End of Pages */

// Export
export default list
