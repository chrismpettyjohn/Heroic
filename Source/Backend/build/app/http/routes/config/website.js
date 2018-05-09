'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _website = require('../../controller/config/website');

var _website2 = _interopRequireDefault(_website);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

  constructor(http) {
    http.patch('/api/auth/admin/config/website', _website2.default.update);
    http.get('/api/config/website', _website2.default.read);
  }

}
exports.default = Routes;