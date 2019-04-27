'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroic = require('../models/heroic');

var _heroic2 = _interopRequireDefault(_heroic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  // Fetch settings
  static async read() {
    try {
      let settings = await _heroic2.default.query().findOne({ id: 1 });
      return Promise.resolve(settings);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
exports.default = Interactor;