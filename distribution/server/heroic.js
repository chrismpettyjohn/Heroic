'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = require('./lib/log');

var _log2 = _interopRequireDefault(_log);

var _server = require('./sql/server');

var _server2 = _interopRequireDefault(_server);

var _server3 = require('./web/server');

var _server4 = _interopRequireDefault(_server3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Heroic {
  static async init() {
    try {
      // Launch SQL handler
      await _server2.default.init();
      await _server2.default.test();
      // Launch WEB handler
      await _server4.default.init();
      // Display Launch Message
      _log2.default.push('Heroic', 'init()', 'Heroic has launched', 'info');
    } catch (e) {
      _log2.default.push('Heroic', 'init()', e, 'fatal');
    }
  }
}
exports.default = Heroic;