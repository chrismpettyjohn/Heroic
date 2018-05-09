'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = require('../../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _jwt = require('../../../lib/jwt');

var _jwt2 = _interopRequireDefault(_jwt);

var _users = require('../../../sql/interactors/user/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

  static async create(request, reply) {
    try {
      let session = await _users2.default.login(request.body.username, request.body.password);
      session = await _users2.default.read(session, 'id', true);
      session = await _jwt2.default.sign(session);
      reply.code(200).send(session);
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

  static async read(request, reply) {
    try {
      let session = await _users2.default.read(request.raw.session.id, 'id', true);
      if (session.bans.length > 0) {
        reply.code(200).send({
          error: 'banned'
        });
      } else {
        reply.code(200).send(session);
      }
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

  static async client(request, reply) {
    try {
      let sso = await _users2.default.client(request.raw.session.id);
      reply.code(200).send(sso);
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

}
exports.default = Controller;