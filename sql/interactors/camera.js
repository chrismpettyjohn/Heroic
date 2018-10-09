'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camera = require('../models/camera');

var _camera2 = _interopRequireDefault(_camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  // Fetch article
  static async read(id, relations = '') {
    try {
      // Prepare
      let camera = {};
      // Single query or latest
      if (!isNaN(parseInt(id))) {
        camera = await _camera2.default.query().eager(`[${relations}]`).findById(id);
      } else {
        camera = await _camera2.default.query().eager(`[${relations}]`).orderBy('id', 'DESC').limit(20);
      }
      // Results?
      if (camera) {
        return Promise.resolve(camera);
      } else {
        return Promise.reject(Error('MISSING'));
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
exports.default = Interactor;