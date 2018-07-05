import Site from '@/components/pages/site'
import System from '@/components/pages/system'
const routes = [
  {
    // Site
    name: 'Site',
    path: '/site',
    component: System.Parent,
    children: [
      {
        name: 'Site.Settings',
        path: 'settings',
        component: Site.Settings,
        meta : {
          page : true,
          level : 7
        }
      }
    ]
  }
]
export default routes
