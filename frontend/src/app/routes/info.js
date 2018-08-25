// Dependencies
import Info from '@/views/info'

// Create Routes List
let routes = []

/* Add To List */

// Tips
routes.push({
  name: 'Info.Tips',
  path: '/tips',
  component: Info.Tips
})

// Social Network
routes.push({
  name: 'Info.Networks',
  path: '/social-networks',
  component: Info.Networks
})

// Beta
routes.push({
  name: 'Info.Beta',
  path: '/beta',
  component: Info.Beta
})
/* End of Add To List */
export default routes
