'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objection = require('objection');

var _room = require('../models/room');

var _room2 = _interopRequireDefault(_room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  // Fetch article
  static async read(id, relations = '') {
    try {
      // Prepare
      let room = {};
      // Single query or latest
      if (!isNaN(parseInt(id))) {
        room = await _room2.default.query().eager(`[${relations}]`).findById(id);
      } else {
        room = await _room2.default.query().eager(`[${relations}]`).orderBy((0, _objection.raw)('RAND()')).limit(10);
      }
      // Results?
      if (room) {
        return Promise.resolve(room);
      } else {
        return Promise.reject(Error('MISSING'));
      }
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }
}
exports.default = Interactor;