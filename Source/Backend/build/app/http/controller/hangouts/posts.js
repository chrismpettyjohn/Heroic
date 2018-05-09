'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = require('../../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _posts = require('../../../sql/interactors/hangouts/posts');

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

  static async read(request, reply) {
    try {
      if (request.params.id) {
        let post = await _posts2.default.read(request.params.id);
        reply.code(200).send(post);
      } else {
        let posts = await _posts2.default.read();
        reply.code(200).send(posts);
      }
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }
}
exports.default = Controller;