'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = require('../../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _rooms = require('../../../sql/interactors/user/rooms');

var _rooms2 = _interopRequireDefault(_rooms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

  static async read(request, reply) {
    try {
      let rooms = await _rooms2.default.read(request.params.id);
      reply.code(200).send(rooms);
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

}
exports.default = Controller;