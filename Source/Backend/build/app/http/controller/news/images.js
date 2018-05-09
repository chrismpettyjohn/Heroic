'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

  static read(request, reply) {
    let list = [];
    let files = _fs2.default.readdirSync(_path2.default.resolve(__dirname, '..', '..', '..', '..', 'public', 'assets', 'img', 'articles'));

    files.forEach(file => {
      if (file.indexOf('_thumb') > -1) {
        list.push(file.replace('_thumb.png', ''));
      }
    });

    reply.code(200).send(list);
  }

}
exports.default = Controller;