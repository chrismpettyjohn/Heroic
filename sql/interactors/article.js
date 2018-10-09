'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = require('../models/article');

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {
  // Create article
  static async create(article) {
    try {
      article.timestamp = Math.floor(new Date() / 1000);
      let result = await _article2.default.query().insertAndFetch(article);
      return Promise.resolve(result.id);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Fetch article
  static async read(id, relations = '') {
    try {
      let article = {};
      if (!isNaN(parseInt(id))) {
        article = await _article2.default.query().eager(`[${relations}]`).findById(id);
      } else {
        article = await _article2.default.query().eager(`[${relations}]`).orderBy('id', 'DESC').limit(10).select();
      }
      if (article) {
        return Promise.resolve(article);
      } else {
        return Promise.reject(Error('MISSING'));
      }
    } catch (e) {
      return Promise.reject(e);
    }
  }

  // Update article
  static async update(article) {
    return _article2.default.query().where('id', article.id).patch(article);
  }

  // Delete article
  static async delete(id) {
    return _article2.default.query().where('id', id).delete();
  }
}
exports.default = Interactor;