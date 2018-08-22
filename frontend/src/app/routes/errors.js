// Dependencies
import Error from '@/views/errors'

// Create Routes List
let routes = []

/* Add To List */

// 404
routes.push({
  name: 'Errors.404',
  path: '/404',
  component: Error.NotFound
})

// 500
routes.push({
  name: 'Errors.500',
  path: '/500',
  component: Error.System
})

/* End of Add To List */
export default routes
