'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jwt = require('../../lib/jwt');

var _jwt2 = _interopRequireDefault(_jwt);

var _user = require('../../sql/interactors/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  static async read(request, reply) {
    try {
      let user = await _user2.default.read(request.session.username);
      reply.code(201).send(user);
    } catch (e) {
      reply.code(400).send(e);
    }
  }
  static async create(request, reply) {
    try {
      // Try Login
      let user = await _user2.default.login(request.body.username, request.body.password);
      // Sign Session
      user = _jwt2.default.sign(user);
      // Return
      reply.code(201).send(user);
    } catch (e) {
      reply.code(400).send(e);
    }
  }

  static async client(request, reply) {
    try {
      let sso = await _user2.default.client(request.session.id);
      reply.code(201).send(sso);
    } catch (e) {
      reply.code(400).send(e);
    }
  }
}
exports.default = Controller;