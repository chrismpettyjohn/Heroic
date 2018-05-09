'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _posts = require('./posts');

var _posts2 = _interopRequireDefault(_posts);

var _server = require('../../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Model extends _server2.default.Model {

  get tableName() {
    return 'cms_hangouts_sections';
  }

  posts() {
    return this.hasMany(_posts2.default).query('columns', ['id', 'user_id', 'section_id', 'title', 'description', 'image', 'timestamp']);
  }

}
exports.default = Model;