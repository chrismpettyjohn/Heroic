import Heroic from '~/app/heroic'
import Fastify from 'fastify'
import Glob from 'glob'
export default class HTTP {

  static server = {}

  static init() {
    return new Promise(async (resolve, reject) => {
      try {
        await HTTP.prepare()
        await HTTP.configure()
        await HTTP.middleware()
        await HTTP.routing()
        await HTTP.staticRouting()
        await HTTP.listen()
        resolve(`HTTP Server is listening on port ${Heroic.Config.http.port}`)
      } catch (error) {
        reject(`HTTP Server - ${error}`)
      }
    })
  }

  static prepare() {
    return new Promise((resolve, reject) => {
      HTTP.server = new Fastify()
      resolve()
    })
  }

  static configure() {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  static middleware() {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  static routing() {
    return new Promise((resolve, reject) => {
      Glob(`${__dirname}/routes/**/*.json`, ((errors, routes) => {
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
              // Inject Route
              HTTP.server[data.method.toLowerCase()](link, controller[data.controller])
            })
          })
          resolve()
        } else {
          reject(errors)
        }
      }))
    })
  }

  static staticRouting() {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

  static listen() {
    return new Promise((resolve, reject) => {
      HTTP.server.listen(Heroic.Config.http.port, (error => {
        if (error) {
          reject(`HTTP server cannot listen on port ${Heroic.Config.http.port}`)
        } else {
          resolve()
        }
      }))
    })
  }

}