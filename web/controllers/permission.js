'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _permission = require('../../sql/interactors/permission');

var _permission2 = _interopRequireDefault(_permission);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  // Auth: Create new permission group
  static async authCreate(request, reply) {
    try {
      let permission = await _permission2.default.create(request.body.permission);
      reply.code(200).send(permission.id);
    } catch (e) {
      reply.code(500).send(e);
    }
  }

  // Fetch permission
  static async read(request, reply) {
    try {
      let permission = await _permission2.default.read(request.params.id, request.params.relations);
      reply.code(200).send(permission);
    } catch (e) {
      reply.code(404).send();
    }
  }

  // Auth: Update permission group
  static async authUpdate(request, reply) {
    try {
      await _permission2.default.update(request.body.permission);
      reply.code(200).send();
    } catch (e) {
      reply.code(500).send(e);
    }
  }

  // Auth: Delete permission group
  static async authDelete(request, reply) {
    try {
      await _permission2.default.delete(request.body.permission);
      reply.code(200).send();
    } catch (e) {
      reply.code(500).send(e);
    }
  }
}
exports.default = Controller;