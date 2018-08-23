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

// Profile (View)
routes.push({
  name: 'Home.Profile',
  path: '/profile/:username',
  component: Home.Profile,
  props: true
})

// Client
routes.push({
  name: 'Home.Client',
  path: '/client',
  component: Home.Blank
})

// Logout
routes.push({
  name: 'Home.Logout',
  path: '/logout',
  component: Home.Logout
})

/* End of Add To List */
export default routes
