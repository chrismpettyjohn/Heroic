'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articles = require('./articles');

var _articles2 = _interopRequireDefault(_articles);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _server2.default.Model {

  get tableName() {
    return 'cms_news_categories';
  }

  articles() {
    return this.hasMany(_articles2.default, 'category_id').query('columns', ['id', 'user_id', 'category_id', 'title', 'description', 'image', 'timestamp']);
  }

}
exports.default = Model;
Model.dependents = ['articles'];