'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _products = require('./products');

var _products2 = _interopRequireDefault(_products);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _server2.default.Model {

  get tableName() {
    return 'cms_store_purchases';
  }

  product() {
    return this.hasOne(_products2.default, 'id', 'product_id').query('columns', ['id', 'title', 'rank_id', 'price']);
  }

}
exports.default = Model;