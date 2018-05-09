'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ranks = require('../../models/user/ranks');

var _ranks2 = _interopRequireDefault(_ranks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

  static async read(id) {
    try {
      if (id) {
        let rank = await _ranks2.default.where('id', id).fetch({ columns: ['id', ' rank_name'], withRelated: ['users'] });
        if (rank) {
          return rank;
        } else {
          throw new Error('RETURN: Rank does not exist');
        }
      } else {
        return _ranks2.default.fetchAll({ columns: ['id', 'rank_name', 'badge', 'cms_display_staff'] });
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  static async hasRank(id, type) {
    try {
      let rank = _ranks2.default.where('id', id).fetch({ columns: ['cms_mod', 'cms_admin'] });
      rank = rank.toJSON();
      switch (type) {
        case 'mod':
          if (rank.cms_mod == '1') {
            return true;
          } else {
            return false;
          }
          break;

        case 'admin':
          if (rank.cms_admin == '1') {
            return true;
          } else {
            return false;
          }
          break;
      }
    } catch (error) {
      throw new Error(error);
    }
  }

}
exports.default = Interactor;