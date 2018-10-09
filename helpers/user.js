'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _user = require('../sql/models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Helper {
  static async check(user) {
    if (!_validator2.default.isAlphanumeric(user.username)) {
      return Promise.reject(Error('username'));
    } else if (!_validator2.default.isEmail(user.mail)) {
      return Promise.reject(Error('email'));
    } else if (!user.password) {
      return Promise.reject(Error('password'));
    } else {
      return Promise.resolve();
    }
  }

  static async duplicates(user) {
    // Prepare
    let status = null;
    // Username
    status = await _user2.default.query().select('id').findOne({ username: user.username });
    if (status) {
      return Promise.reject(Error('username'));
    }
    // Email
    status = await _user2.default.query().select('id').findOne({ mail: user.mail });
    if (status) {
      return Promise.reject(Error('email'));
    }
    // Return
    return Promise.resolve();
  }

  static async staff(request, reply, done) {
    try {
      let user = await _user2.default.query().eager('permission').findById(request.session.id);
      if (user.permission.rank_type === 'staff') {
        done();
      } else {
        throw new Error('y u no staff!!!');
      }
    } catch (e) {
      reply.code(403).send(e);
    }
  }
}
exports.default = Helper;