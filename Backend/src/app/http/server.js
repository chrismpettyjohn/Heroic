import File from 'fs'
import Path from 'path'
import Fetch from 'glob'
import Async from 'async'
import Fastify from 'fastify'
import Helmet from 'fastify-helmet'
import Body from 'fastify-formbody'
import Static from 'serve-static'
import Session from './middleware/session'
export default class Server {

  static async init() {
    return new Promise((resolve, reject) => {
      Async.waterfall([
        Server.configure, Server.routes
      ], ((errors, http) => {

        http.get('/*', (req, reply) => {
          const stream = File.readFileSync(Path.join(__dirname, '..', '..', 'public', 'views', 'index.html'))
          reply.type('text/html').send(stream)
        })

        http.listen(global.config.http.port, (error => {
          if (error) {
            reject(`HTTP server cannot listen on port ${global.config.http.port}`)
          } else {
            resolve()
          }
        }))

      }))
    })
  }

  static configure(callback) {
    const http = Fastify()

    http.register(Helmet)

    http.use('/assets', Static(Path.join(__dirname, '..', '..', 'public', 'assets')))

    http.use('/public', Static(Path.join(global.path, 'public')))

    http.register(Body)

    http.addHook('preHandler', (request, reply, next) => {
      request.ip = request.headers['x-forwarded-for'] || '127.0.0.1'
      next()
    })

    http.use('/api/auth', Session.check)
    http.use('/api/auth/mod', Session.checkMod)
    http.use('/api/auth/admin', Session.checkAdmin)

    callback(null, http)
  }

  static routes(http, callback) {
    Fetch.sync(`${__dirname}/routes/**/*.js`).forEach(file => {
      const route = require(Path.resolve(file)).default
      new route(http)
    })
    callback(null, http)
  }

}