'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _products = require('../../controller/store/products');

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

    constructor(http) {
        http.post('/api/auth/admin/store/products', _products2.default.create);
        http.get('/api/store/products', _products2.default.read);
        http.get('/api/store/products/:id', _products2.default.read);
        http.patch('/api/auth/admin/store/products/:id', _products2.default.update);
        http.delete('/api/auth/admin/store/products/:id', _products2.default.delete);
    }

}
exports.default = Routes;