'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'users_settings';
  }

  static get visible() {
    return ['id', 'user_id', 'respects_given', 'respects_received', 'guild_id', 'cfh_send', 'cfh_abusive', 'cfh_warnings', 'cfh_bans', 'online_time', 'tags', 'hof_points'];
  }
}
exports.default = Model;