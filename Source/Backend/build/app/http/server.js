'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _fastify = require('fastify');

var _fastify2 = _interopRequireDefault(_fastify);

var _fastifyStatic = require('fastify-static');

var _fastifyStatic2 = _interopRequireDefault(_fastifyStatic);

var _fastifyHelmet = require('fastify-helmet');

var _fastifyHelmet2 = _interopRequireDefault(_fastifyHelmet);

var _fastifyFormbody = require('fastify-formbody');

var _fastifyFormbody2 = _interopRequireDefault(_fastifyFormbody);

var _session = require('./middleware/session');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Server {

  constructor(time) {
    _async2.default.waterfall([Server.configure, Server.routes], (errors, http) => {

      http.get('/*', (req, reply) => {
        const stream = _fs2.default.readFileSync(_path2.default.join(__dirname, '..', '..', 'public', 'views', 'index.html'));
        reply.type('text/html').send(stream);
      });

      http.listen(80, '0.0.0.0', () => {
        console.log('   Web Server is running');
      });
    });
  }

  static configure(callback) {
    const http = (0, _fastify2.default)();
    /*const http = Fastify({
      http2: true,
      https: {
        key: File.readFileSync(Path.join(__dirname, '..', 'config', 'https', 'key.pem'), 'utf8'),
        cert: File.readFileSync(Path.join(__dirname, '..', 'config', 'https', 'cert.pem'), 'utf8')
      }
    })
    */

    http.register(_fastifyHelmet2.default);

    http.register(_fastifyStatic2.default, {
      root: _path2.default.join(__dirname, '..', '..', 'public', 'assets'),
      prefix: '/assets/'
    });

    http.register(_fastifyFormbody2.default);

    http.addHook('preHandler', (request, reply, next) => {
      request.ip = request.headers['x-forwarded-for'] || '127.0.0.1';
      next();
    });

    http.use('/api/auth', _session2.default.check);
    http.use('/api/auth/mod', _session2.default.checkMod);
    http.use('/api/auth/admin', _session2.default.checkAdmin);

    callback(null, http);
  }

  static routes(http, callback) {
    _glob2.default.sync(`${__dirname}/routes/**/*.js`).forEach(file => {
      const route = require(_path2.default.resolve(file)).default;
      new route(http);
    });
    callback(null, http);
  }

}
exports.default = Server;