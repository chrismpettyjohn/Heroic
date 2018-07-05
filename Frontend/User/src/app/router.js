import Vue from 'vue'
import Router from 'vue-router'
import HTTP from '@/app/utilities/http'
import Views from '@/components/views'

// Initiate
Vue.use(Router)

// Configure
const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    // Guest
    {
      path: '/login',
      name: 'guest.login',
      component: Views.Guest.Login,
      meta: {
        session: false
      }
    },
    // Redirect to login if input is empty
    {
      path: '/',
      redirect: '/login'
    },
    // User
    {
      path: '',
      component: Views.User.Index,
      children: [
        // Logout
        {
          name: 'user.logout',
          path: 'logout',
          component: Views.User.Logout
        },
        /* User Home */

        // Me Page
        {
          name: 'user.home.me',
          path: 'me',
          component: Views.User.Home.Me,
          meta: {
            session: true
          }
        },
        // Profiles
        {
          name: 'user.home.profile',
          path: 'profile/:username',
          redirect: { name: 'user.home.profile.home' },
          component: Views.User.Home.Profile.Index,
          children: [
            // Home
            {
              name: 'user.home.profile.home',
              path: 'home',
              component: Views.User.Home.Profile.Home,
              meta: {
                session: true
              }
            },
            // View Guestbook
            {
              name: 'user.home.profile.guestbook.view',
              path: 'guestbook',
              component: Views.User.Home.Profile.Guestbook.View,
              meta: {
                session: true
              }
            },
            // Add To Guestbook
            {
              name: 'user.home.profile.guestbook.add',
              path: 'guestbook/add',
              component: Views.User.Home.Profile.Guestbook.Add,
              meta: {
                session: true
              }
            }
          ],
          meta: {
            session: true
          }
        },
        // Client
        {
          name: 'user.home.client',
          path: 'client',
          component: Views.User.Home.Client,
          meta: {
            session: true
          }
        },
        /* Community Area */

        // Photos
        {
          name: 'user.community.photos',
          path: 'community/photos',
          component: Views.User.Community.Photos,
          meta: {
            jumbotron: {
              title: 'Photos',
              content: 'Have a look at some of the great moments captured by Habbos around the hotel.'
            },
            session: true
          }
        },

        // Rooms
        {
          path: 'community/rooms',
          component: Views.Parent,
          children: [
            // List
            {
              name: 'user.community.rooms',
              path: '/',
              component: Views.User.Community.Rooms.List,
              meta: {
                jumbotron: {
                  title: 'Room Gallery',
                  content: 'Check out some of the most popular rooms right now!'
                },
                session: true
              }
            },
            // Item
            {
              name: 'user.community.rooms.item',
              path: ':id',
              component: Views.User.Community.Rooms.Item,
              props: true,
              meta: {
                session: true
              }
            }
          ]
        },
        // Groups
        {
          path: 'community/groups',
          component: Views.Parent,
          children: [
            // List
            {
              name: 'user.community.groups',
              path: '/',
              component: Views.User.Community.Groups.List,
              meta: {
                jumbotron: {
                  title: 'Popular Groups',
                  content: 'Have a look at some of the largest groups in our hotel!',
                  image: {
                    src: 'https://d1u5p3l4wpay3k.cloudfront.net/habbo_gamepedia/9/90/Base_rentable_teaser.png',
                    width: '162px',
                    height: '162px'
                  }
                },
                session: true
              }
            },
            // Item
            {
              name: 'user.community.groups.item',
              path: ':id',
              component: Views.User.Community.Groups.Item,
              props: true,
              meta: {
                session: true
              }
            }
          ]
        },
        // News
        {
          name: 'user.community.news',
          path: 'community/news',
          component: Views.Parent,
          children: [
            // Category
            {
              name: 'user.community.news.category',
              path: 'category/:id',
              component: Views.User.Community.News.Category,
              meta: {
                session: true
              }
            },
            // Article
            {
              name: 'user.community.news.article',
              path: 'article/:id',
              component: Views.User.Community.News.Article,
              props: true,
              meta: {
                session: true
              }
            }
          ]
        },
        // Staff
        {
          name: 'user.community.staff',
          path: 'community/staff',
          component: Views.User.Community.Staff,
          meta: {
            jumbotron: {
              title: 'Staff Team',
              content: 'Responsible for overseeing the hotel and user protection.',
              image: {
                src: '../img/staff-jumbotron.gif',
                height: '189px',
                width: '220px'
              }
            },
            session: true
          }
        },
        /* Forum Area */
        {
          name: 'user.forum',
          path: '/community/forum',
          component: Views.User.Forum.Index,
          children: [
            // Dashboard
            {
              name: 'user.forum.dashboard',
              path: '/community/forum/dashboard',
              component: Views.User.Forum.Dashboard,
              meta: {
                session: true
              }
            },
            // View Section
            {
              name: 'user.forum.section.view',
              path: '/community/forum/:id',
              component: Views.User.Forum.Section.View,
              meta: {
                section: true,
                session: true
              },
              props: true
            },
            // Create Post
            {
              name: 'user.forum.post.create',
              path: '/community/forum/:section/create',
              component: Views.User.Forum.Post.Create,
              props: true,
              meta: {
                session: true
              }
            },
            // View Post
            {
              name: 'user.forum.post.view',
              path: '/community/forum/:section/:id',
              component: Views.User.Forum.Post.View,
              meta: {
                topic: true,
                session: true
              },
              props: true
            }
          ]
        }
      ]
    },

    /* Errors */
    {
      path: '',
      component: Views.Parent,
      children: [
        // 404 - Not Found
        {
          name: '404',
          path: '/404',
          component: Views.Errors.NotFound
        },
        {
          name: '500',
          path: '/500',
          component: Views.Errors.System
        },
        // 404 Alias
        {
          path: '*',
          redirect: '/404'
        }
      ]
    }
  ]
})

// Route Check (404 Handler)
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/404')
  } else {
    next()
  }
})

// Session Check
router.beforeEach(function (to, from, next) {
  if (to.meta.session) {
    if (window.localStorage.getItem('auth')) {
      // Add Auth Header to Axios
      HTTP.defaults.headers['x-access-token'] = window.localStorage.getItem('jwt')
      // Continue
      next()
    } else {
      next('login')
    }
  } else if (!to.meta.session && to.meta.session != undefined) {
    if (!window.localStorage.getItem('auth')) {
      next()
    } else {
      next('me')
    }
  } else {
    next()
  }
})

// Export
export default router
