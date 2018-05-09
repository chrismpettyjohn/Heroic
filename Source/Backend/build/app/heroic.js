'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _server = require('./http/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Heroic {

  constructor() {
    new _server2.default();
  }

}
exports.default = Heroic;