'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _photos = require('../../controller/user/photos');

var _photos2 = _interopRequireDefault(_photos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

  constructor(http) {
    http.get('/api/photos', _photos2.default.read);
    http.get('/api/photos/:id', _photos2.default.read);
  }

}
exports.default = Routes;