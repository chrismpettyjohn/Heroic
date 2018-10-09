'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _like = require('../../sql/interactors/like');

var _like2 = _interopRequireDefault(_like);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  static async handle(request, reply) {
    try {
      await _like2.default.handle(request.session.id, request.params.parent, request.params.type);
      reply.code(203).send();
    } catch (e) {
      reply.code(500).send(e);
    }
  }
}
exports.default = Controller;