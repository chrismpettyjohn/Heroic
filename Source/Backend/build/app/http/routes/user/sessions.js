'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sessions = require('../../controller/user/sessions');

var _sessions2 = _interopRequireDefault(_sessions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

  constructor(http) {
    http.post('/api/users/session/:username', _sessions2.default.create);
    http.get('/api/auth/users/session/:username', _sessions2.default.read);
    http.get('/api/auth/users/session/client', _sessions2.default.client);
  }

}
exports.default = Routes;