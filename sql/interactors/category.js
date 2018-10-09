'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _category = require('../models/category');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  // Fetch article
  static async read(id, relations = '') {
    try {
      // Prepare
      let category = {};
      // Individual or all
      if (!isNaN(parseInt(id))) {
        category = await _category2.default.query().eager(`[${relations}]`).findById(id);
      } else {
        category = await _category2.default.query().eager(`[${relations}]`).orderBy('id', 'DESC');
      }
      if (category) {
        return Promise.resolve(category);
      } else {
        return Promise.reject(Error('MISSING'));
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
exports.default = Interactor;