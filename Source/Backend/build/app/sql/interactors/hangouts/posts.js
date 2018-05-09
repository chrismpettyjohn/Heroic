'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _posts = require('../../models/hangouts/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

  static async read(id) {
    try {
      if (id) {
        return _posts2.default.where('id', id).fetch({ columns: ['id', 'user_id', 'section_id', 'title', 'content', 'image', 'status', 'timestamp'], withRelated: ['section', 'author'] });
      } else {
        return _posts2.default.query('orderBy', 'id', 'DESC').fetch({ columns: ['id', 'user_id', 'section_id', 'title', 'description', 'image', 'status', 'timestamp'], withRelated: ['section', 'author'] });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

}
exports.default = Interactor;