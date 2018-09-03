import Path from 'path'
import Cors from 'cors'
import IP from 'request-ip'
import Token from '@/lib/jwt'
import Routes from './routes'
import Fastify from 'fastify'
import User from '@/helpers/user'
import Form from 'fastify-formbody'
import Config from '@/config/system'
import Compress from 'fastify-compress'

export default class HTTP {
  static async init () {
    try {
      await HTTP.prepare()
      await Routes.init()
      await HTTP.listen()
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }

  static async prepare () {
    // Setup
    HTTP.server = new Fastify()
    // Configure
    HTTP.server.use(Cors())
    HTTP.server.use(IP.mw())
    // Register
    HTTP.server.register(Compress)
    HTTP.server.register(Form)
    // CORS
    HTTP.server.options('*', (request, reply) => {
      reply.send()
    })
    // Return
    return Promise.resolve()
  }

  static async route (method, link, controller, auth = false, staff = false) {
    // Parse method
    method = method.toLowerCase()
    // Parse Link
    link = `/${link}`
    // Load Controller
    controller = {
      handler: require(Path.resolve(__dirname, 'controllers', `${controller.split('@')[0].toLowerCase()}.js`)).default,
      action: controller.split('@')[1]
    }

    // Handle Authentication
    if (auth && staff) {
      HTTP.server[method](link, {beforeHandler: [Token.check, User.staff]}, controller.handler[controller.action])
    } else if (auth && !staff) {
      HTTP.server[method](link, {beforeHandler: Token.check}, controller.handler[controller.action])
    } else if (!auth) {
      HTTP.server[method](link, controller.handler[controller.action])
    }

    // Return
    return Promise.resolve()
  }

  static async listen () {
    try {
      await HTTP.server.listen(Config.web.port, '0.0.0.0')
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
