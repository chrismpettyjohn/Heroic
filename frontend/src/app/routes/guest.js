// Dependencies
import Guest from '@/views/guest'

// Create Routes List
let routes = []

/* Add To List */

// Default Catch
routes.push({
  path: '/',
  component: Guest.Catch
})

// Login
routes.push({
  name: 'Guest.Login',
  path: '/login',
  component: Guest.Login,
  meta: {
    guest: true
  }
})

// Register
routes.push({
  name: 'Guest.Register',
  path: '/register',
  component: Guest.Register,
  meta: {
    guest: true
  }
})

/* End of Add To List */
export default routes
