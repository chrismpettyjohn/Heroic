'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _objection = require('objection');

var _system = require('../config/system');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SQL {
  static async init() {
    const knex = (0, _knex2.default)({
      client: 'mysql2',
      connection: _system2.default.sql
    });
    _objection.Model.knex(knex);
    return true;
  }

  static async test() {
    const knex = _objection.Model.knex();
    try {
      await knex.select('id').limit(1).from('heroic_settings');
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
exports.default = SQL;