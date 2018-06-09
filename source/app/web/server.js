import Cors from 'cors'
import Glob from 'glob'
import Fastify from 'fastify'
import Heroic from '~/app/heroic'
import formBody from 'fastify-formbody'
export default class HTTP {
  static server = {}
  static middleware = []

  static init() {
    return new Promise(async (resolve, reject) => {
      try {
        await HTTP.prepare()
        await HTTP.configure()
        await HTTP.loadMiddleware()
        await HTTP.handleCORS()
        await HTTP.loadRouting()
        await HTTP.loadStaticRouting()
        await HTTP.listen()
        resolve(`HTTP Server is listening on port ${Heroic.Config.http.port}`)
      } catch (error) {
        reject(`HTTP Server - ${error}`)
      }
    })
  }

  static prepare() {
    return new Promise((resolve, reject) => {
      HTTP.server = new Fastify({
        logger : true,
        http2: Heroic.Config.http.http2
      })
      resolve()
    })
  }

  static configure() {
    return new Promise((resolve, reject) => {
      HTTP.server.use(Cors())
      HTTP.server.register(formBody)
      resolve()
    })
  }

  static loadMiddleware() {
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

  static handleCORS() {
    return new Promise ((resolve, reject) => {
      HTTP.server.options('/*', (request, reply) => {
        reply.code(204).send()
      })
      resolve()
    })
  }

  static loadRouting() {
    return new Promise((resolve, reject) => {
      Glob(`${__dirname}/routes/**/*.json`, (errors, routes) => {
        if (!errors) {
          routes.forEach(route => {
            route = require(route)
            let controller = require(`${__dirname}/controllers/${route.controller}`).default
            route.routes.forEach(data => {
              let link = `/api/${route.prefix}/${data.link}`
              // Adjust for empty GET
              if (data.link.length == 0) {
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

  static loadStaticRouting() {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  static listen() {
    return new Promise((resolve, reject) => {
      HTTP.server.listen(Heroic.Config.http.port, error => {
        if (error) {
          reject(`HTTP server cannot listen on port ${Heroic.Config.http.port}`)
        } else {
          resolve()
        }
      })
    })
  }
}
