import Site from '@/components/pages/site'
import System from '@/components/pages/system'
const routes = [
  {
    name: 'Game',
    path: '/game',
    component: System.Parent,
    children: [
      {
        name: 'Game.Overview',
        path: 'overview',
        component: Site.Overview
      }
    ]
  }
]
export default routes
