import System from '@/components/pages/system'
const routes = [
  {
    // Errors
    name: 'System.Errors',
    path: '/error/session',
    component: System.Parent,
    children: [
      {
        name: 'System.Errors.Session',
        path: '/error/session',
        component: System.Errors.Session
      }
    ]
  },
  // Session
  {
    name: 'System.Session',
    path: '/session',
    component: System.Parent,
    children: [
      {
        name : 'System.Session.Login',
        path : '/login',
        component: System.Session.Login
      }
    ]
  },
  {
    // Dashboard
    name: 'System.Dashboard',
    path: '/dashboard',
    component: System.Dashboard,
    meta: {
      page: true
    }
  }
]
export default routes
