'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Library {

  static async sign(session) {
    try {
      return _jsonwebtoken2.default.sign(session, _fs2.default.readFileSync(_path2.default.resolve(__dirname, '..', 'config', 'https', 'key.pem')), {
        expiresIn: '24h',
        algorithm: 'HS256'
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async validate(session) {
    if (session) {
      try {
        return _jsonwebtoken2.default.verify(session, _fs2.default.readFileSync(_path2.default.resolve(__dirname, '..', 'config', 'https', 'key.pem')));
      } catch (error) {
        throw new Error(error);
      }
    } else {
      throw new Error('No authentication token was provided');
    }
  }

}
exports.default = Library;