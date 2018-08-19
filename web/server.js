import Path from 'path'
import Routes from './routes'
import Fastify from 'fastify'
import Config from '@/config/system'
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
    HTTP.server = new Fastify()
    return Promise.resolve()
  }

  static async route (method, link, controller) {
    // Parse method 
    method = method.toLowerCase()
    // Parse Link
    link = `/${link}`
    // Load Controller
    controller = {
      handler: require(Path.resolve(__dirname, 'controllers', `${controller.split('@')[0]}.js`)).default,
      action: controller.split('@')[1],
    }
    // Configure Route
    HTTP.server[method](link, controller.handler[controller.action])
    // Return
    return Promise.resolve()
  }

  static async listen () {
    try {
      await HTTP.server.listen(Config.web.port)
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
