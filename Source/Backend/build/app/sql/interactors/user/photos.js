'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _photos = require('../../models/user/photos');

var _photos2 = _interopRequireDefault(_photos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

  static async read(id) {
    try {
      if (id) {
        return _photos2.default.where('id', id).fetch({ columns: ['id', 'user_id', 'url', 'timestamp'], withRelated: ['author'] });
      } else {
        return _photos2.default.query('orderBy', 'id', 'desc').fetchAll({ columns: ['id', 'user_id', 'url', 'timestamp'], withRelated: ['author'] });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

}
exports.default = Interactor;