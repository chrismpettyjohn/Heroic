'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camera = require('../../sql/interactors/camera');

var _camera2 = _interopRequireDefault(_camera);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  // Fetch photo
  static async read(request, reply) {
    try {
      let camera = await _camera2.default.read(request.params.id, request.params.relations);
      reply.code(200).send(camera);
    } catch (e) {
      reply.code(404).send();
    }
  }
}
exports.default = Controller;