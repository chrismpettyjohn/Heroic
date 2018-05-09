'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _server2.default.Model {

  get tableName() {
    return 'bans';
  }

}
exports.default = Model;