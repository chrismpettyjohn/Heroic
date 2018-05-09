'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _images = require('../../controller/news/images');

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

    constructor(http) {
        http.get('/api/news/images', _images2.default.read);
    }
}
exports.default = Routes;