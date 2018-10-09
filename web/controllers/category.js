'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _category = require('../../sql/interactors/category');

var _category2 = _interopRequireDefault(_category);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  // Fetch article
  static async read(request, reply) {
    try {
      let category = await _category2.default.read(request.params.id, request.params.relations);
      reply.code(200).send(category);
    } catch (e) {
      reply.code(404).send();
    }
  }
}
exports.default = Controller;