'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _comment = require('../models/comment');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  static async create(comment) {
    comment.timestamp = Math.floor(new Date() / 1000);
    return _comment2.default.query().insertAndFetch(comment);
  }
  static async read(id, relations = '') {
    try {
      let comment = await _comment2.default.query().eager(`[${relations}]`).findById(id);
      if (comment) {
        return Promise.resolve(comment);
      } else {
        throw new Error('Comment not found');
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
  static async update(comment) {
    return _comment2.default.query().where('id', comment.id).patch(comment);
  }
  static async delete(comment) {
    return _comment2.default.query().where('id', comment).delete();
  }
  static async privilege(user, comment) {
    try {
      comment = await _comment2.default.query().findById(comment);
      if (comment) {
        if (comment.user_id === user) {
          return Promise.resolve();
        } else {
          throw new Error('User does not have privileges to this post');
        }
      } else {
        throw new Error('Comment does not exist');
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
exports.default = Interactor;