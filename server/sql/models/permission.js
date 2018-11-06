'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'permissions';
  }

  static get visible() {
    return [
    // Columns
    'id', 'rank_name', 'rank_desc', 'rank_type', 'prefix',
    // Relationships
    'users'];
  }

  static get relationMappings() {
    // Dependencies
    const User = require('./user').default;
    // Relations
    return {
      // Users (users)
      users: {
        relation: _base2.default.HasManyRelation,
        modelClass: User,
        join: {
          from: 'permissions.id',
          to: 'users.rank'
        }
      }
    };
  }
}
exports.default = Model;