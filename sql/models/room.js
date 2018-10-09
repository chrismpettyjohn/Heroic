'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'rooms';
  }

  static get visible() {
    return [
    // Columns
    'id', 'owner_id', 'owner_name', 'name', 'description', 'score', 'users', 'users_max', 'guild_id', 'tags', 'is_public', 'is_staff_picked',
    // Relationships
    'owner'];
  }

  static get relationMappings() {
    // Dependencies
    const User = require('./user').default;
    // Relations
    return {
      // Owner (users)
      owner: {
        relation: _base2.default.HasOneRelation,
        modelClass: User,
        join: {
          from: 'rooms.owner_id',
          to: 'users.id'
        }
      }
    };
  }
}
exports.default = Model;