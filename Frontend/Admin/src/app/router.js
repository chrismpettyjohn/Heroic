import Vue from 'vue'
import Routes from './routes'
import Router from 'vue-router'
import Session from '@/app/session'

// Prepare
let routes = []

// Initiate
Vue.use(Router)

// Configure Routes
Routes.forEach(handler => {
  handler.forEach(route => {
    routes.push(route)
  })
})

// Configure
let router = new Router({
  mode: 'history',
  base: '/',
  routes: routes,
  linkActiveClass: 'uk-active'
})

// Session Check
router.beforeEach(Session.check)

// Export
export default router
