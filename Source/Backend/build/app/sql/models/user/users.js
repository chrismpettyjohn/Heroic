'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bans = require('./bans');

var _bans2 = _interopRequireDefault(_bans);

var _ranks = require('./ranks');

var _ranks2 = _interopRequireDefault(_ranks);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

var _purchases = require('../store/purchases');

var _purchases2 = _interopRequireDefault(_purchases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _server2.default.Model {

  get tableName() {
    return 'users';
  }

  bans() {
    return this.hasMany(_bans2.default, 'user_id').query('columns', ['id', 'user_id']);
  }

  rank() {
    return this.hasOne(_ranks2.default, 'id', 'rank').query('columns', ['id', 'rank_name', 'cms_admin']);
  }

  purchases() {
    return this.hasMany(_purchases2.default).query('orderBy', 'id', 'DESC').query('columns', ['id', 'user_id', 'product_id', 'status', 'created_at']);
  }

}
exports.default = Model;