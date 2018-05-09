'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _categories = require('../../controller/news/categories');

var _categories2 = _interopRequireDefault(_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

  constructor(http) {
    http.post('/api/auth/mod/categories', _categories2.default.create);
    http.get('/api/news/categories', _categories2.default.read);
    http.get('/api/news/categories/:id', _categories2.default.read);
    http.patch('/api/auth/mod/categories/:id', _categories2.default.update);
    http.delete('/api/auth/mod/categories/:id', _categories2.default.delete);
  }

}
exports.default = Routes;