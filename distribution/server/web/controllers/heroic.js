'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroic = require('../../sql/interactors/heroic');

var _heroic2 = _interopRequireDefault(_heroic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  // Fetch heroic settings
  static async read(request, reply) {
    try {
      let settings = await _heroic2.default.read();
      reply.code(200).send(settings);
    } catch (e) {
      reply.code(400).send();
    }
  }
}
exports.default = Controller;