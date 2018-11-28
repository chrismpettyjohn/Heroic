import Fastify from 'fastify'
import Heroic from '@/heroic'
import Log from '@/lib/log'

class Server {

  static instance = {}

  static async init () {
    Server.instance = new Fastify()

    await Server.configure()

    return Promise.resolve()
  }

  static async configure () {
  }

  static async route (type, path, controller) {
    // Handle optional paramater
    if (path.indexOf('?') > -1) {
      Server.instance[type.toLowerCase()](`/${path.split('?')[0].slice(0, -1)}`, controller)
      Server.instance[type.toLowerCase()](`/${path.replace('/', ':')}`, controller)
    }
    else {
      Server.instance[type.toLowerCase()](`/${path}`, controller)
    }
  }

  static async start () {
    await Server.instance.listen(Heroic.config.HTTP_PORT, '0.0.0.0')
    Log.write(`HTTP server listening on ${Heroic.config.HTTP_PORT}`)
    return Promise.resolve()
  }

}

export default Server