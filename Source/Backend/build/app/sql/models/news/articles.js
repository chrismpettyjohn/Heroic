'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('../user/users');

var _users2 = _interopRequireDefault(_users);

var _categories = require('./categories');

var _categories2 = _interopRequireDefault(_categories);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _server2.default.Model {

  get tableName() {
    return 'cms_news_articles';
  }

  author() {
    return this.belongsTo(_users2.default).query('columns', ['id', 'username', 'look', 'rank']);
  }

  category() {
    return this.belongsTo(_categories2.default, 'category_id').query('columns', ['id', 'title']);
  }

}
exports.default = Model;