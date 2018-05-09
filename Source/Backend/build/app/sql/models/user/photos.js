'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('../user/users');

var _users2 = _interopRequireDefault(_users);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _server2.default.Model {

  get tableName() {
    return 'camera_web';
  }

  author() {
    return this.belongsTo(_users2.default).query('columns', ['id', 'username', 'look', 'rank']);
  }

}
exports.default = Model;