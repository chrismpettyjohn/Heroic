import { Guest } from '../../components'

export default [
  {
    path: '/',
    component: Guest.Catch
  },
  {
    name: 'Guest',
    path: '/',
    component: Guest.Parent,
    children: [
      {
        name: 'Guest.Login',
        path: 'login',
        component: Guest.Login,
        meta: {
          guestOnly: true
        }
      },
      {
        name: 'Guest.Register',
        path: 'register',
        component: Guest.Register,
        meta: {
          guestOnly: true
        }
      }
    ]
  }
]
