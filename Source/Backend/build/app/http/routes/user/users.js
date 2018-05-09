'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('../../controller/user/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {
  constructor(http) {
    // General Access
    http.get('/api/users/user/:username', _users2.default.read);
    http.get('/api/users/online/:type', _users2.default.online);
    // Validate Data
    http.post('/api/users/validate', _users2.default.validate);
    // Authenticated
    http.put('/api/users/user/:username', _users2.default.create);
    http.patch('/api/auth/users/user/:username', _users2.default.update);
  }

}
exports.default = Routes;