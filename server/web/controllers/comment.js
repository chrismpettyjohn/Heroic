'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('../../helpers/validator');

var _validator2 = _interopRequireDefault(_validator);

var _comment = require('../../sql/interactors/comment');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  static async create(request, reply) {
    try {
      let comment = request.body.comment;
      comment.user_id = request.session.id;
      await _validator2.default.fields(comment, ['user_id', 'parent_id', 'parent_type', 'content']);
      comment.content = await _validator2.default.filter(comment.content);
      comment = await _comment2.default.create(comment);
      reply.code(203).send(comment);
    } catch (e) {
      reply.code(500).send(e);
    }
  }
  static async read(request, reply) {
    try {
      let comment = await _comment2.default.read(request.params.id, request.params.relations);
      reply.code(203).send(comment);
    } catch (e) {
      reply.code(500).send(e);
    }
  }
  static async update(request, reply) {
    try {
      let comment = request.body.comment;
      comment.id = request.params.id;
      comment.user_id = request.session.id;
      await _validator2.default.fields(comment, ['user_id', 'parent_id', 'parent_type', 'content']);
      await _validator2.default.check(comment.content, 'isLength', 3);
      comment.content = await _validator2.default.filter(comment.content);
      await _comment2.default.privilege(request.session.id, comment.id);
      await _comment2.default.update(request.body.comment);
      reply.code(203).send();
    } catch (e) {
      console.log(e);
      reply.code(500).send(e);
    }
  }
  static async delete(request, reply) {
    try {
      await _comment2.default.privilege(request.session.id, request.params.id);
      await _comment2.default.delete(request.params.id);
      reply.code(203).send();
    } catch (e) {
      reply.code(500).send(e);
    }
  }
}
exports.default = Controller;