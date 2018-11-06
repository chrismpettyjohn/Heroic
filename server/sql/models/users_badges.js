'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'users_badges';
  }

  static get visible() {
    return ['user_id', 'slot_id', 'badge_code'];
  }
}
exports.default = Model;