'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ini = require('ini');

var _ini2 = _interopRequireDefault(_ini);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _bookshelf = require('bookshelf');

var _bookshelf2 = _interopRequireDefault(_bookshelf);

var _bookshelfCascadeDelete = require('bookshelf-cascade-delete');

var _bookshelfCascadeDelete2 = _interopRequireDefault(_bookshelfCascadeDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = _ini2.default.parse(_fs2.default.readFileSync('./config.ini', 'utf-8'));

const data = {
  client: "mysql2",
  connection: {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
  }
};
const Database = (0, _bookshelf2.default)((0, _knex2.default)(data));

Database.plugin(_bookshelfCascadeDelete2.default);

exports.default = Database;