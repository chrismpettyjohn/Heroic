'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _requestIp = require('request-ip');

var _requestIp2 = _interopRequireDefault(_requestIp);

var _jwt = require('../lib/jwt');

var _jwt2 = _interopRequireDefault(_jwt);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _fastify = require('fastify');

var _fastify2 = _interopRequireDefault(_fastify);

var _user = require('../helpers/user');

var _user2 = _interopRequireDefault(_user);

var _fastifyFormbody = require('fastify-formbody');

var _fastifyFormbody2 = _interopRequireDefault(_fastifyFormbody);

var _fastifyStatic = require('fastify-static');

var _fastifyStatic2 = _interopRequireDefault(_fastifyStatic);

var _system = require('../config/system');

var _system2 = _interopRequireDefault(_system);

var _fastifyCompress = require('fastify-compress');

var _fastifyCompress2 = _interopRequireDefault(_fastifyCompress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HTTP {
  static async init() {
    try {
      await HTTP.prepare();
      await _routes2.default.init();
      await HTTP.listen();
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  static async prepare() {
    // Setup
    HTTP.server = new _fastify2.default();
    // Configure
    HTTP.server.use((0, _cors2.default)());
    HTTP.server.use(_requestIp2.default.mw());
    // Register
    HTTP.server.register(_fastifyCompress2.default);
    HTTP.server.register(_fastifyFormbody2.default);
    // Static
    HTTP.server.register(_fastifyStatic2.default, {
      root: _path2.default.resolve(__dirname, '..', 'public')
    });
    // CORS
    HTTP.server.options('/api/*', (request, reply) => {
      reply.send();
    });
    // Return
    return Promise.resolve();
  }

  static async route(method, link, controller, auth = false, staff = false) {
    // Parse method
    method = method.toLowerCase();
    // Parse Link
    link = `/api/${link}`;
    // Load Controller
    controller = {
      handler: require(_path2.default.resolve(__dirname, 'controllers', `${controller.split('@')[0].toLowerCase()}.js`)).default,
      action: controller.split('@')[1]

      // Handle Authentication
    };if (auth && staff) {
      HTTP.server[method](link, { beforeHandler: [_jwt2.default.check, _user2.default.staff] }, controller.handler[controller.action]);
    } else if (auth && !staff) {
      HTTP.server[method](link, { beforeHandler: _jwt2.default.check }, controller.handler[controller.action]);
    } else if (!auth) {
      HTTP.server[method](link, controller.handler[controller.action]);
    }

    // Return
    return Promise.resolve();
  }

  static async listen() {
    try {
      await HTTP.server.listen(_system2.default.web.port, '0.0.0.0');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
exports.default = HTTP;