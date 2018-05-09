'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rooms = require('../../controller/user/rooms');

var _rooms2 = _interopRequireDefault(_rooms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

  constructor(http) {
    http.get('/api/rooms', _rooms2.default.read);
    http.get('/api/rooms/:id', _rooms2.default.read);
  }

}
exports.default = Routes;