'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'heroic_articles';
  }

  static get visible() {
    return [
    // Columns
    'id', 'author_id', 'category_id', 'title', 'image', 'description', 'content', 'timestamp',
    // Relationships
    'author', 'category'];
  }

  static get relationMappings() {
    // Dependencies
    const User = require('./user').default;
    const Category = require('./category').default;
    // Relations
    return {
      // Author (users)
      author: {
        relation: _base2.default.HasOneRelation,
        modelClass: User,
        join: {
          from: 'heroic_articles.author_id',
          to: 'users.id'
        }
      },
      // Category (heroic_categories)
      category: {
        relation: _base2.default.HasOneRelation,
        modelClass: Category,
        join: {
          from: 'heroic_articles.category_id',
          to: 'heroic_categories.id'
        }
      }
    };
  }
}
exports.default = Model;