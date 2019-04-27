import { Community } from '../../components'

export default [
  {
    name: 'Community',
    path: '/community',
    component: Community.Parent,
    children: [
      {
        name: 'Community.Photos',
        path: 'photos',
        component: Community.Photos.List,
        meta: {
          loginRequired: true
        }
      },
      {
        name: 'Community.Rooms',
        path: 'rooms',
        component: Community.Rooms.Parent,
        meta: {
          loginRequired: true
        },
        children: [
          {
            name: 'Community.Rooms.List',
            path: 'list',
            component: Community.Rooms.List,
            meta: {
              loginRequired: true
            }
          },
          {
            name: 'Community.Rooms.View',
            path: 'view/:id',
            component: Community.Rooms.View,
            meta: {
              loginRequired: true
            },
            props: true
          }
        ]
      },
      {
        name: 'Community.Staff',
        path: 'staff',
        component: Community.Staff.List,
        meta: {
          loginRequired: true
        }
      },
      {
        name: 'Community.Online',
        path: 'online',
        component: Community.Online,
        meta: {
          loginRequired: true
        }
      },
      {
        name: 'Community.Leaderboards',
        path: 'leaderboards',
        component: Community.Leaderboards,
        meta: {
          loginRequired: true
        }
      }
    ]
  }
]
