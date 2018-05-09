import File from 'fs'
import Path from 'path'
import Fetch from 'glob'
import Async from 'async'
import Fastify from 'fastify'
import Static from 'fastify-static'
import Helmet from 'fastify-helmet'
import Body from 'fastify-formbody'
import Session from './middleware/session'
export default class Server {

  constructor (time) {
    Async.waterfall([ Server.configure, Server.routes], ((errors, http) => {

      http.get('/*', (req, reply) => {
        const stream = File.readFileSync(Path.join(__dirname, '..', '..', 'public', 'views', 'index.html'))
        reply.type('text/html').send(stream)
      })

      http.listen(80, '0.0.0.0', (() => {
        console.log('   Web Server is running')
      }))

    }))
  }

  static configure (callback) {
    const http = Fastify()
    /*const http = Fastify({
      http2: true,
      https: {
        key: File.readFileSync(Path.join(__dirname, '..', 'config', 'https', 'key.pem'), 'utf8'),
        cert: File.readFileSync(Path.join(__dirname, '..', 'config', 'https', 'cert.pem'), 'utf8')
      }
    })
    */

    http.register(Helmet)

    http.register(Static, {
      root: Path.join(__dirname, '..', '..', 'public', 'assets'),
      prefix: '/assets/',
    })

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


  static routes (http, callback) {
    Fetch.sync(`${__dirname}/routes/**/*.js`).forEach (file => {
      const route = require(Path.resolve(file)).default
      new route (http)
    })
    callback(null, http)
  }

}
