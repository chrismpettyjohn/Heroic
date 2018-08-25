// Dependencies
import Home from '@/views/home'

// Create Routes List
let routes = []

/* Add To List */

// Me
routes.push({
  name: 'Home.Me',
  path: '/me',
  component: Home.Me
})

// Account Settings
routes.push({
  name: 'Home.Settings',
  path: '/settings',
  component: Home.Settings
})

// Profile (View)
routes.push({
  name: 'Home.Profile',
  path: '/profile/:username',
  component: Home.Profile,
  props: true
})

// Social Media
routes.push({
  name: 'Home.Social',
  path: '/social',
  component: Home.Social
})

// Social Media
routes.push({
  name: 'Home.Beta',
  path: '/beta',
  component: Home.Beta
})

routes.push({
// Client
  name: 'Home.Client',
  path: '/client',
  component: Home.Client
})

// Logout
routes.push({
  name: 'Home.Logout',
  path: '/logout',
  component: Home.Logout
})

/* End of Add To List */
export default routes
