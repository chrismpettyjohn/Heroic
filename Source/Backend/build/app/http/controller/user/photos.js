'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = require('../../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _photos = require('../../../sql/interactors/user/photos');

var _photos2 = _interopRequireDefault(_photos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

  static async read(request, reply) {
    try {
      if (request.params.id) {
        let photo = await _photos2.default.read(request.params.id);
        reply.code(200).send(photo);
      } else {
        let photos = await _photos2.default.read();
        reply.code(200).send(photos);
      }
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }
}
exports.default = Controller;