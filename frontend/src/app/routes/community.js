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

/* End of Add To List */
export default routes
