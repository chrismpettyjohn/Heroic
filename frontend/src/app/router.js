import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import { Session } from './store'

Vue.use(VueRouter)

let routes = []

Routes.forEach(parent => {
  parent.forEach(child => {
    routes.push(child)
  })
})

let Router = new VueRouter({
  mode: 'history',
  routes: routes
})

const guard = async (to, from, next) => {
  let session = Session.getters.session

  if (session.status) {
    if (to.meta.guestOnly) return next({ name: 'Home.Me' })

    return next()
  }

  if (to.meta.loginRequired) return next({ name: 'Guest.Login' })

  return next()
}

Router.beforeEach((to, from, next) => {
  if (Session.getters.loaded) return guard(to, from, next)

  if (to.name === 'System.Maintenance') return guard(to, from, next)

  Session.watch(state => state.loaded, (updated, old) => {
    if (updated) return guard(to, from, next)
  })
})

export default Router
