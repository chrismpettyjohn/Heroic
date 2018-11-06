'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'heroic_likes';
  }

  static get visible() {
    return [
    // Columns
    'id', 'user_id', 'parent_id', 'parent_type', 'type',
    // Relationships
    'author'];
  }
  static get relationMappings() {
    // Dependencies
    const User = require('./user').default;
    // Relations
    return {
      // Author (users)
      author: {
        relation: _base2.default.HasOneRelation,
        modelClass: User,
        join: {
          from: 'heroic_likes.user_id',
          to: 'users.id'
        }
      }
    };
  }
}
exports.default = Model;