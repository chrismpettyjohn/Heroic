'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  static async create(post) {
    post.timestamp = Math.floor(new Date() / 1000);
    return _post2.default.query().insertAndFetch(post);
  }
  static async read(id = 0, relationships = '') {
    try {
      let post = await _post2.default.query().eager(`[${relationships}]`).findById(id);
      if (post) {
        return Promise.resolve(post);
      } else {
        throw new Error('Post does not exist');
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
  static async update(post) {
    return _post2.default.query().where('id', post.id).patch(post);
  }
  static async delete(id) {
    return _post2.default.query().where('id', id).delete();
  }
  static async privileges(user, post) {
    try {
      post = await _post2.default.query().findById(post);
      if (post) {
        if (post.user_id === user) {
          return Promise.resolve(true);
        } else {
          throw new Error('User does not have privileges to this post');
        }
      } else {
        throw new Error('No post found');
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
exports.default = Interactor;