'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _like = require('../models/like');

var _like2 = _interopRequireDefault(_like);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  static async handle(user, parent, type) {
    try {
      let likes = await _like2.default.query().where('user_id', user).andWhere('parent_id', parent).andWhere('parent_type', type);
      if (likes.length > 0) {
        return _like2.default.query().where('user_id', user).andWhere('parent_id', parent).andWhere('parent_type', type).delete();
      } else {
        return _like2.default.query().insert({
          user_id: user,
          parent_id: parent,
          parent_type: type
        });
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
exports.default = Interactor;