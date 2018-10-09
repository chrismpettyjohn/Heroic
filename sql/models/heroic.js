'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'heroic_settings';
  }

  static get visible() {
    return ['site.name', 'site.link', 'server.ip', 'server.port', 'license.user', 'swf.base', 'swf.config', 'user.motto', 'user.look', 'user.gender', 'user.rank', 'user.credits', 'user.pixels', 'user.points', 'user.home'];
  }
}
exports.default = Model;