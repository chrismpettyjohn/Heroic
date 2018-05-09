'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _purchases = require('../../controller/store/purchases');

var _purchases2 = _interopRequireDefault(_purchases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Routes {

    constructor(http) {
        http.post('/api/auth/store/purchases', _purchases2.default.create);
    }

}
exports.default = Routes;