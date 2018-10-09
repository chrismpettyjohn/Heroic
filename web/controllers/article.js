'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = require('../../sql/interactors/article');

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  // Auth: Create new article
  static async authCreate(request, reply) {
    try {
      let article = await _article2.default.create(request.body.article);
      reply.code(200).send(article);
    } catch (e) {
      reply.code(500).send(e);
    }
  }

  // Fetch article
  static async read(request, reply) {
    try {
      let article = await _article2.default.read(request.params.id, request.params.relations);
      reply.code(200).send(article);
    } catch (e) {
      reply.code(404).send();
    }
  }

  // Auth: Update article
  static async authUpdate(request, reply) {
    try {
      await _article2.default.update(request.body.article);
      reply.code(200).send();
    } catch (e) {
      reply.code(500).send(e);
    }
  }

  // Auth: Delete article
  static async authDelete(request, reply) {
    try {
      await _article2.default.delete(request.params.id);
      reply.code(200).send();
    } catch (e) {
      reply.code(500).send(e);
    }
  }
}
exports.default = Controller;