'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'heroic_comments';
  }

  static get visible() {
    return [
    // Columns
    'id', 'parent_id', 'parent_type', 'user_id', 'content', 'timestamp',
    // Relationships
    'author', 'replies', 'likes'];
  }

  static get relationMappings() {
    // Dependencies
    const User = require('./user').default;
    const Likes = require('./like').default;
    // Relations
    return {
      // Author (users)
      author: {
        relation: _base2.default.HasOneRelation,
        modelClass: User,
        join: {
          from: 'heroic_comments.user_id',
          to: 'users.id'
        }
      },
      replies: {
        relation: _base2.default.HasManyRelation,
        modelClass: Model,
        join: {
          from: 'heroic_comments.id',
          to: 'heroic_comments.parent_id'
        },
        modify: {
          parent_type: 'comment'
        }
      },
      likes: {
        relation: _base2.default.HasManyRelation,
        modelClass: Likes,
        join: {
          from: 'heroic_comments.id',
          to: 'heroic_likes.parent_id'
        },
        modify: {
          parent_type: 'comment'
        }
      }
    };
  }
}
exports.default = Model;