import File from 'fs'
import Path from 'path'
import Cors from 'cors'
import Glob from 'glob'
import Fastify from 'fastify'
import Heroic from '~/app/heroic'
import requestIP from 'request-ip'
import Static from 'fastify-static'
import formBody from 'fastify-formbody'
export default class HTTP {
  static server = {}
  static middleware = []

  static async init () {
    try {
      await HTTP.prepare()
      await HTTP.configure()
      await HTTP.loadMiddleware()
      await HTTP.loadStaticRouting()
      await HTTP.loadRouting()
      await HTTP.listen()
      return `HTTP Server is listening on port ${Heroic.Config.http.port}`
    } catch (error) {
      return Error(`HTTP Server - ${error}`)
    }
  }

  static async prepare () {
    HTTP.server = new Fastify({http2: Heroic.Config.http.http2})
    return true
  }

  static configure () {
    return new Promise((resolve, reject) => {
      HTTP.server.use(Cors())
      HTTP.server.register(formBody)
      HTTP.server.use(requestIP.mw())
      resolve()
    })
  }

  static loadMiddleware () {
    return new Promise((resolve, reject) => {
      Glob(`${__dirname}/middleware/**/*.js`, (errors, middleware) => {
        if (!errors) {
          middleware.forEach(middle => {
            let component = require(middle).default
            HTTP.middleware[component.name] = component.handle
          })
          resolve()
        } else {
          reject(errors)
        }
      })
    })
  }

  static loadRouting () {
    return new Promise((resolve, reject) => {
      Glob(`${__dirname}/routes/**/*.json`, (errors, routes) => {
        if (!errors) {
          routes.forEach(route => {
            route = require(route)
            let controller = require(`${__dirname}/controllers/${route.controller}`).default
            route.routes.forEach(data => {
              let link = ''
              if (route.prefix) {
                link = `/api/${route.prefix}/${data.link}`
              } else {
                link = `/api/${data.link}`
              }
              // Adjust for empty GET
              if (data.link.length === 0) {
                link = link.slice(0, -1)
              }
              if (data.middleware) {
                HTTP.server[data.method.toLowerCase()](link, {
                  beforeHandler: HTTP.middleware[data.middleware]
                }, controller[data.controller])
              } else {
                HTTP.server[data.method.toLowerCase()](link, controller[data.controller])
              }
            })
          })
          resolve()
        } else {
          reject(errors)
        }
      })
    })
  }

  static async loadStaticRouting () {
    // Serve Index
    HTTP.server.get('*', (request, reply) => {
      reply.sendFile(Path.resolve(__dirname, '..', '..', 'public', 'index.html'))
    })
    // Static Files
    HTTP.server.register(Static, {
      root: Path.resolve(__dirname, '..', '..', 'public')
    })
    // 404 To Index
    HTTP.server.setNotFoundHandler((request, reply) => {
      let file = File.readFileSync(Path.resolve(__dirname, '..', '..', 'public', 'index.html'), 'utf8')
      reply.type('text/html')
      reply.code(200).send(file)
    })
    // Return
    return true
  }

  static async listen () {
    HTTP.server.listen(Heroic.Config.http.port, '0.0.0.0', error => {
      if (error) {
        return Error(`HTTP server cannot listen on port ${Heroic.Config.http.port}`)
      } else {
        return true
      }
    })
  }
}
