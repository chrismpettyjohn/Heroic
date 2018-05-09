'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _categories = require('../../models/news/categories');

var _categories2 = _interopRequireDefault(_categories);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

  static async create(data) {
    try {
      let step = await new _categories2.default(data).save();
      step = await _categories2.default.query('orderBy', 'id', 'DESC').fetch({ columns: ['id'] });
      return Interactor.read(step.toJSON().id);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async read(id) {
    try {
      if (id) {
        let category = await _categories2.default.where('id', id).fetch({ columns: ['id', 'title', 'timestamp'], withRelated: ['articles', 'articles.author'] });
        if (category) {
          return category;
        } else {
          throw new Error('RETURN: Category not found');
        }
      } else {
        return _categories2.default.fetchAll({ columns: ['id', 'title', 'timestamp'], withRelated: ['articles'] });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  static update(data) {
    return new _categories2.default(data).save();
  }

  static delete(id) {
    return _categories2.default.where('id', id).destroy();
  }

}
exports.default = Interactor;