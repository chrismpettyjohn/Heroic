// Dependencies
import Vue from 'vue'
import Routes from './routes'
import Router from 'vue-router'
import Session from '@/app/storage/session'

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

// Logic Session Guard
const guard = (to, from, next) => {
  let state = Session.getters.active
  if (!to.meta.guest) {
    if (state) {
      next()
    } else {
      next({ name: 'Guest.Login' })
    }
  } else {
    if (!state) {
      next()
    } else {
      next({ name: 'Home.Me' })
    }
  }
}

// Implement Session Guard
router.beforeEach((to, from, next) => {
  if (Session.getters.ready) {
    guard(to, from, next)
  } else {
    Session.watch(state => state.ready, (updated, old) => {
      if (updated) {
        guard(to, from, next)
      }
    })
  }
})

// Export Router
export default router
