'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _server2.default.Model {

  get tableName() {
    return 'permissions';
  }

  users() {
    return this.hasMany(_users2.default, 'rank').query('columns', ['id', 'username', 'look', 'rank', 'online']);
  }

}
exports.default = Model;