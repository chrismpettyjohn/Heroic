'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _wordfilter = require('../sql/interactors/wordfilter');

var _wordfilter2 = _interopRequireDefault(_wordfilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Helper {
  static async check(string, type, options = null) {
    let result = {};
    if (options) {
      result = _validator2.default[type](string, options);
    } else {
      result = _validator2.default[type](string);
    }
    if (result) {
      return Promise.resolve();
    } else {
      return Promise.reject(Error(`Data is invalid`));
    }
  }
  static async fields(data, fields) {
    try {
      if (!data) {
        throw new Error('No data defined');
      }
      fields.forEach(field => {
        if (!data[field]) {
          throw new Error(`${field} is invalid`);
        }
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
  static async filter(content) {
    try {
      let filter = await _wordfilter2.default.read();
      filter.forEach(word => {
        let reg = new RegExp(word.key, 'g');
        content = content.replace(reg, word.replacement);
      });
      return Promise.resolve(content);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
exports.default = Helper;