'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validator = require('../../helpers/validator');

var _validator2 = _interopRequireDefault(_validator);

var _post = require('../../sql/interactors/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  static async create(request, reply) {
    try {
      let post = request.body.post;
      post.user_id = request.session.id;
      await _validator2.default.fields(post, ['content']);
      await _validator2.default.check(post.content, 'isLength', 3);
      post.content = await _validator2.default.filter(post.content);
      post = await _post2.default.create(post);
      reply.code(203).send(post);
    } catch (e) {
      reply.code(500).send(e);
    }
  }
  static async read(request, reply) {
    try {
      let post = await _post2.default.read(request.params.id, request.params.relations);
      reply.code(203).send(post);
    } catch (e) {
      reply.code(500).send(e);
    }
  }
  static async update(request, reply) {
    try {
      let post = request.body.post;
      post.id = request.params.id;
      await _validator2.default.fields(post, ['content']);
      await _validator2.default.check(post.content, 'isLength', 3);
      post.content = await _validator2.default.filter(post.content);
      await _post2.default.privileges(request.session.id, post.id);
      post = await _post2.default.update(post);
      reply.code(203).send();
    } catch (e) {
      reply.code(500).send(e);
    }
  }
  static async delete(request, reply) {
    try {
      if (request.params.id) {
        await _post2.default.privileges(request.session.id, request.params.id);
        await _post2.default.delete(request.params.id);
        reply.code(203).send();
      } else {
        reply.code(403).send('No post content specified');
      }
    } catch (e) {
      reply.code(500).send(e);
    }
  }
}
exports.default = Controller;