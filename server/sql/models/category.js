'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _base2.default {
  static get tableName() {
    return 'heroic_categories';
  }

  static get visible() {
    return [
    // Columns
    'id', 'title', 'content',
    // Relationships
    'articles'];
  }

  static get relationMappings() {
    // Dependencies
    const Articles = require('./article').default;
    // Relations
    return {
      // Articles (heroic_articles)
      articles: {
        relation: _base2.default.HasManyRelation,
        modelClass: Articles,
        join: {
          from: 'heroic_categories.id',
          to: 'heroic_articles.category_id'
        }
      }
    };
  }
}
exports.default = Model;