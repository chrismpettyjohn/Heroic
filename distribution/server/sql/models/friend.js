'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'messenger_friendships';
  }

  static get visible() {
    return [
    // Columns
    'user_one_id', 'user_two_id', 'relation', 'friends_since',
    // Relationships
    'user'];
  }

  static get relationMappings() {
    // Dependencies
    const User = require('./user').default;
    // Relations
    return {
      // User (users)
      user: {
        relation: _base2.default.HasOneRelation,
        modelClass: User,
        join: {
          from: 'messenger_friendships.user_two_id',
          to: 'users.id'
        }
      }
    };
  }
}
exports.default = Model;