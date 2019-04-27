import Path from 'path'
import Cors from 'cors'
import IP from 'request-ip'
import Log from '@/lib/log'
import Token from '@/lib/jwt'
import Routes from './routes'
import Fastify from 'fastify'
import Config from '../../config'
import User from '@/helpers/user'
import Static from 'fastify-static'
import Form from 'fastify-formbody'
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
    // Static File Serving
    HTTP.server.register(Static, {
      root: Path.resolve(process.cwd(), 'public')
    })
    // 404 Error Handler
    HTTP.server.setNotFoundHandler(async (request, reply) => {
      reply.sendFile('index.html')
    })
    // Return
    return Promise.resolve()
  }

  static async route (method, link, controller, auth = false, staff = false) {
    // Parse method
    method = method.toLowerCase()
    // Parse Link
    link = `/api/${link}`
    // Load Controller
    controller = {
      handler: require(Path.resolve(__dirname, 'controllers', `${controller.split('@')[0].toLowerCase()}.js`)).default,
      action: controller.split('@')[1]
    }

    // Handle Authentication
    if (auth && staff) {
      HTTP.server[method](link, { beforeHandler: [Token.check, User.staff] }, controller.handler[controller.action])
    } else if (auth && !staff) {
      HTTP.server[method](link, { beforeHandler: Token.check }, controller.handler[controller.action])
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
      if (Config.web.port === '80') {
        Log.push('Heroic', 'init()', 'Port 80 requires administrator privileges', 'fatal')
        return Promise.reject(e)
      } else {
        return Promise.reject(e)
      }
    }
  }
}
