import { Home } from '../../components'

export default [
  {
    name: 'Home',
    path: '/home',
    component: Home.Parent,
    children: [
      {
        name: 'Home.Home',
        path: 'me',
        component: Home.Home,
        meta: {
          loginRequired: true
        }
      },
      {
        name: 'Home.Client',
        path: 'client',
        component: Home.Client,
        meta: {
          loginRequired: true
        }
      },
      {
        name: 'Home.Logout',
        path: 'logout',
        component: Home.Logout,
        meta: {
          loginRequired: true
        }
      },
      {
        name: 'Home.Profile',
        path: 'profile/:username',
        component: Home.Profile,
        meta: {
          loginRequired: true
        },
        props: true
      },
      {
        name: 'Home.Settings',
        path: 'settings',
        component: Home.Settings,
        meta: {
          loginRequired: true
        }
      }
    ]
  }
]
