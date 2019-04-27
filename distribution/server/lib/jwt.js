'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class JWT {
  static sign(session) {
    return _jsonwebtoken2.default.sign(JSON.parse(JSON.stringify(session)), _config2.default.hash, {
      expiresIn: '2 days',
      algorithm: 'HS256'
    });
  }

  static validate(session) {
    try {
      return _jsonwebtoken2.default.verify(session, _config2.default.hash);
    } catch (e) {
      return false;
    }
  }

  static check(request, reply, done) {
    if (request.headers['heroic-token']) {
      let token = JWT.validate(request.headers['heroic-token']);
      if (token) {
        request.session = token;
        done();
      } else {
        reply.code(403).send('Your session is not valid');
      }
    } else {
      reply.code(403).send('A session is required for this');
    }
  }
}
exports.default = JWT;