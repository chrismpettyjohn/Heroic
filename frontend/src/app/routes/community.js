// Dependencies
import Community from '@/views/community'

// Create Routes List
let routes = []

/* Add To List */

// Photo List
routes.push({
  name: 'Community.Photos.List',
  path: '/photos',
  component: Community.Photos.List
})

// Photo View
routes.push({
  name: 'Community.Photos.View',
  path: '/photos/:id',
  component: Community.Photos.View,
  props: true
})

// Room List
routes.push({
  name: 'Community.Rooms.List',
  path: '/rooms',
  component: Community.Rooms.List
})

// Room List
routes.push({
  name: 'Community.Rooms.View',
  path: '/rooms/:id',
  component: Community.Rooms.View,
  props: true
})

// News Latest
routes.push({
  name: 'Community.News.Latest',
  path: '/news/latest',
  component: Community.News.Latest
})

// News Category
routes.push({
  name: 'Community.News.Category',
  path: '/news/category/:id',
  component: Community.News.Category,
  props: true
})

// News Article
routes.push({
  name: 'Community.News.Article',
  path: '/news/article/:id',
  component: Community.News.Article,
  props: true
})



/* End of Add To List */
export default routes
