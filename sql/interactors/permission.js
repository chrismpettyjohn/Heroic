'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _permission = require('../models/permission');

var _permission2 = _interopRequireDefault(_permission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  // Create permission
  static async create(permission) {
    try {
      let data = await _permission2.default.query().insertAndFetch(permission);
      return Promise.resolve(data.id);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Fetch permission
  static async read(id, relations = '') {
    try {
      // Prepare
      let permission = {};
      // Single query or type-based
      if (!isNaN(parseInt(id))) {
        permission = await _permission2.default.query().eager(`[${relations}]`).findById(id);
      } else if (id === 'staff') {
        permission = await _permission2.default.query().eager(`[${relations}]`).where('rank_type', 'staff').orderBy('id', 'DESC');
      } else if (id === 'vip') {
        permission = await _permission2.default.query().eager(`[${relations}]`).where('level', '2').orderBy('id', 'DESC');
      }
      // Does permission exist?
      if (permission) {
        return Promise.resolve(permission);
      } else {
        return Promise.reject(Error('MISSING'));
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Update permission
  static async update(permission) {
    return _permission2.default.query().where('id', permission.id).patch(permission);
  }

  // Delete permission
  static async delete(id) {
    return _permission2.default.query().where('id', id).delete();
  }
}
exports.default = Interactor;