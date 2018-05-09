'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ranks = require('../user/ranks');

var _ranks2 = _interopRequireDefault(_ranks);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _server2.default.Model {

  get tableName() {
    return 'cms_store_products';
  }

  rank() {
    return this.hasOne(_ranks2.default, 'id', 'rank_id').query('columns', ['id', 'rank_name', 'badge']);
  }

}
exports.default = Model;