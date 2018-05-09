'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ranks = require('../../controller/user/ranks');

var _ranks2 = _interopRequireDefault(_ranks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

  constructor(http) {
    http.get('/api/ranks', _ranks2.default.read);
    http.get('/api/ranks/:id', _ranks2.default.read);
  }

}
exports.default = Routes;