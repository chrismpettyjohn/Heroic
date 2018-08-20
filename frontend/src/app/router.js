// Dependencies
import Vue from 'vue'
import Routes from './routes'
import Router from 'vue-router'
import Session from '@/app/storage/session'
import Settings from '@/app/storage/settings'

// Inject Router
Vue.use(Router)

// Prepare
let routes = []

// Foreach
Routes.forEach(set => {
  set.forEach(route => {
    routes.push(route)
  })
})

// Router Config
let router = new Router({
  mode: 'history',
  routes: routes
})

// Session Auth Guard
router.beforeEach(async (to, from, next) => {
  // Authenticated routes or guest
  if (!to.meta.guest) {
    // User session exists otherwise redirect
    if (Session.getters.active) {
      next()
    } else {
      next({ name: 'Guest.Login' })
    }
  } else {
    // User session nonexistent otherwise redirect
    if (!Session.getters.active) {
      next()
    } else {
      next({ name: 'Home.Me' })
    }
  }
})

// No Route Defined Guard
router.beforeEach(async (to, from, next) => {
  // If no route defined, otherwise continue
  if (to.path === '/') {
    // Go home if authenticated otherwise login
    if (Session.getters.active) {
      next({ name: 'Home.Me' })
    } else {
      next({ next: 'Guest.Login' })
    }
  } else {
    next()
  }
})

// Export Router
export default router
