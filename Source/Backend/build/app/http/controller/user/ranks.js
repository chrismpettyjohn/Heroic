'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = require('../../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _ranks = require('../../../sql/interactors/user/ranks');

var _ranks2 = _interopRequireDefault(_ranks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

  static async read(request, reply) {
    try {
      let ranks = await _ranks2.default.read(request.params.id);
      reply.code(200).send(ranks);
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

}
exports.default = Controller;