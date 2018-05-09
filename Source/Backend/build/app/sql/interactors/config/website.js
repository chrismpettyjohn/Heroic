'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _website = require('../../models/config/website');

var _website2 = _interopRequireDefault(_website);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

  static async update(data) {
    data.id = 1;
    return new _website2.default(data).save();
  }

  static async read() {
    return _website2.default.where('id', 1).fetch({ columns: ['site_name', 'site_desc', 'site_link', 'server_ip', 'server_port', 'swf_base', 'swf_gamedata', 'findretros_user', 'findretros_enabled', 'store_enabled', 'paypal_key', 'paypal_mode'] });
  }

}
exports.default = Interactor;