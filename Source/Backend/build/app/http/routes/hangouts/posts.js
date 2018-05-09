'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _posts = require('../../controller/hangouts/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

  constructor(http) {
    http.get('/api/hangouts/posts', _posts2.default.read);
    http.get('/api/hangouts/posts/:id', _posts2.default.read);
  }

}
exports.default = Routes;