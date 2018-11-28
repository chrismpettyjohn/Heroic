import Server from './server'
import Heroic from '@/heroic'
import Log from '@/lib/log'
class Router {

  static prefix = '/'
  static namespace = ''

  static async group (options, callback) {
    // Settings
    this.prefix = options.prefix
    this.namespace = options.namespace
    // Return
    let router = this
    callback(router)
  }

  static async parse (path, controller) {
    controller = {
      class: `${this.namespace}/${controller.split('@')[0].toLowerCase()}`,
      method: controller.split('@')[1].toLowerCase(),
      path: `${this.prefix}/${path}`
    }

    controller.class = controller.class.replace('@', Heroic.root)
    controller.class = require(controller.class).default
    controller.method = controller.class[controller.method]
    return Promise.resolve(controller)
  }

  // Request Types
  static async get (path, controller) {
    try {
      controller = await Router.parse(path, controller)
      await Server.route('GET', controller.path, controller.method)
      return Promise.resolve()

    } catch (e) {
      Log.write(e, 'error')
      return Promise.reject()
    }
  }

  static async post (path, controller) {
    try {
      controller = await Router.parse(path, controller)
      await Server.route('POST', controller.path, controller.method)
      return Promise.resolve()

    } catch (e) {
      Log.write(e, 'error')
      return Promise.reject()
    }
  }

  static async put (path, controller) {
    try {
      controller = await Router.parse(path, controller)
      await Server.route('PUT', controller.path, controller.method)
      return Promise.resolve()

    } catch (e) {
      Log.write(e, 'error')
      return Promise.reject()
    }
  }

  static async delete (path, controller) {
    try {
      controller = await Router.parse(path, controller)
      await Server.route('DELETE', controller.path, controller.method)
      return Promise.resolve()

    } catch (e) {
      Log.write(e, 'error')
      return Promise.reject()
    }
  }

}

export default Router