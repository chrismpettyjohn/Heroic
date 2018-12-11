import Server from './server'
import Heroic from '@/heroic'
import Log from '@/lib/log'
class Router {

  // Group Dependent
  static prefix = '/'
  static namespace = ''
  static middleware = []

  // Constant
  static registered = {}

  static async group (options, callback) {
    // Settings
    this.prefix = options.prefix
    this.namespace = options.namespace
    this.middleware = (options.middleware) ? options.middleware : []
    // Return
    let router = this
    callback(router)
  }

  static async parse (path, controller) {
    return new Promise(async (resolve, reject) => {

      controller = {
        class: `${this.namespace}/${controller.split('@')[0].toLowerCase()}`,
        method: controller.split('@')[1].toLowerCase(),
        path: `${this.prefix}/${path}`,
        middleware: []
      }

      controller.class = controller.class.replace('@', Heroic.root)
      controller.class = require(controller.class).default
      controller.method = controller.class[controller.method]

      if (this.middleware.length > 0) {

        let index = 0
        this.middleware.forEach(middleware => {

          if (this.registered[middleware]) {
            controller.middleware.push(this.registered[middleware].validate)
            index++

            if (index === this.middleware.length) {
              resolve(controller)
            }

          } else {
            reject(`${middleware} middleware is not registered`)
          }

        })

      } else {
        resolve(controller)
      }

    })

  }

  // Middleware
  static async register (identity, controller) {
    Router.registered[identity] = require(controller.replace('@', Heroic.root)).default
    return Promise.resolve()
  }

  // Request Types
  static async get (path, controller) {
    try {
      controller = await Router.parse(path, controller)
      await Server.route('GET', controller.path, controller.method, controller.middleware)
      return Promise.resolve()
    } catch (e) {
      Log.write(e, 'error')
      console.log(e)
      return Promise.reject()
    }
  }

  static async post (path, controller) {
    try {
      controller = await Router.parse(path, controller)
      await Server.route('POST', controller.path, controller.method, controller.middleware)
      return Promise.resolve()

    } catch (e) {
      Log.write(e, 'error')
      return Promise.reject()
    }
  }

  static async put (path, controller) {
    try {
      controller = await Router.parse(path, controller)
      await Server.route('PUT', controller.path, controller.method, controller.middleware)
      return Promise.resolve()

    } catch (e) {
      Log.write(e, 'error')
      return Promise.reject()
    }
  }

  static async delete (path, controller) {
    try {
      controller = await Router.parse(path, controller)
      await Server.route('DELETE', controller.path, controller.method, controller.middleware)
      return Promise.resolve()

    } catch (e) {
      Log.write(e, 'error')
      return Promise.reject()
    }
  }

}

export default Router