'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articles = require('../../controller/news/articles');

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

  constructor(http) {
    http.post('/api/auth/mod/articles', _articles2.default.create);
    http.get('/api/news/articles', _articles2.default.read);
    http.get('/api/news/articles/:id', _articles2.default.read);
    http.patch('/api/auth/mod/articles/:id', _articles2.default.update);
    http.delete('/api/auth/mod/articles/:id', _articles2.default.delete);
  }

}
exports.default = Routes;