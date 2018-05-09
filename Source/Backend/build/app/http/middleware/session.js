'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jwt = require('../../lib/jwt');

var _jwt2 = _interopRequireDefault(_jwt);

var _error = require('../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _ranks = require('../../sql/interactors/user/ranks');

var _ranks2 = _interopRequireDefault(_ranks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Middleware {

  static async check(request, reply, next) {
    try {
      request.session = await _jwt2.default.validate(request.headers['x-access-token']);
      next();
    } catch (error) {
      next({ error: 'Could not authorize this request' });
    }
  }

  static async checkMod(request, reply, next) {
    try {
      let validate = await _ranks2.default.hasRank(request.session.rank, 'mod');
      next();
    } catch (error) {
      next({ error: 'Could not authorize this request' });
    }
  }

  static async checkAdmin(request, reply, next) {
    try {
      let validate = await _ranks2.default.hasRank(request.session.rank, 'admin');
      next();
    } catch (error) {
      next({ error: 'Could not authorize this request' });
    }
  }

}
exports.default = Middleware;