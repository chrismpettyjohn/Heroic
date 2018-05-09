'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articles = require('../../models/news/articles');

var _articles2 = _interopRequireDefault(_articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

  static async create(data) {
    try {
      let step = await new _articles2.default(data).save();
      step = await _articles2.default.query('orderBy', 'id', 'DESC').fetch({ columns: ['id'] });
      step = await Interactor.read(step.toJSON().id);
      return step;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async update(data) {
    return new _articles2.default(data).save();
  }

  static async read(id) {
    try {
      if (id) {
        let article = await _articles2.default.where('id', id).fetch({ columns: ['id', 'user_id', 'category_id', 'title', 'description', 'content', 'image', 'timestamp'], withRelated: ['author', 'category'] });
        if (article) {
          return article;
        } else {
          throw new Error('RETURN: Article not found');
        }
      } else {
        return _articles2.default.query('orderBy', 'id', 'DESC').fetchAll({ columns: ['id', 'user_id', 'category_id', 'title', 'description', 'image', 'timestamp'], withRelated: ['author', 'category'] });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  static async delete(id) {
    try {
      let step = await Interactor.read(id);
      step = await _articles2.default.where('id', id).destroy();
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }

}
exports.default = Interactor;