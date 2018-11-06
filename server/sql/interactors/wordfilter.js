'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wordfilter = require('../models/wordfilter');

var _wordfilter2 = _interopRequireDefault(_wordfilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  static async read() {
    return _wordfilter2.default.query();
  }
}
exports.default = Interactor;