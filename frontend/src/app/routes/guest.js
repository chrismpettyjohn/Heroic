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

// Parent
routes.push({
  path: '/',
  component: Guest.Parent,
  children: [
    {
      name: 'Guest.Login',
      path: '/login',
      component: Guest.Login,
      meta: {
        guest: true
      }
    },
    {
      name: 'Guest.Register',
      path: '/register',
      component: Guest.Register,
      meta: {
        guest: true
      }
    }
  ]
})

/* End of Add To List */
export default routes
