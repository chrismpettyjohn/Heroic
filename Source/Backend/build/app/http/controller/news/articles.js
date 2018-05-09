'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = require('../../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _articles = require('../../../sql/interactors/news/articles');

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

  static async create(request, reply) {
    try {
      const data = {
        user_id: request.raw.session.id,
        category_id: request.body.category_id,
        title: request.body.title,
        description: request.body.description,
        content: request.body.content,
        image: request.body.image
      };
      let step = await _articles2.default.create(data);
      reply.code(200).send(step);
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

  static async update(request, reply) {
    try {
      if (request.body.id != undefined) {}
      const data = {
        id: request.params.id,
        user_id: request.raw.session.id,
        category_id: request.body.category_id,
        title: request.body.title,
        description: request.body.description,
        content: request.body.content,
        image: request.body.image.replace('_thumb.png', '')
      };
      let step = await _articles2.default.read(data.id);
      step = await _articles2.default.update(data);
      reply.code(200).send(step);
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

  static async read(request, reply) {
    try {
      if (request.params.id) {
        let article = await _articles2.default.read(request.params.id);
        reply.code(200).send(article);
      } else {
        let articles = await _articles2.default.read();
        reply.code(200).send(articles);
      }
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

  static async delete(request, reply) {
    try {
      let article = await _articles2.default.delete(request.params.id);
      reply.code(200).send('Article has been deleted');
    } catch (error) {
      new _error2.default(error, request, reply);
    }
  }

}
exports.default = Controller;