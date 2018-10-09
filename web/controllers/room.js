'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _room = require('../../sql/interactors/room');

var _room2 = _interopRequireDefault(_room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  // Fetch room
  static async read(request, reply) {
    try {
      let room = await _room2.default.read(request.params.id, request.params.relations);
      reply.code(200).send(room);
    } catch (e) {
      reply.code(404).send();
    }
  }
}
exports.default = Controller;