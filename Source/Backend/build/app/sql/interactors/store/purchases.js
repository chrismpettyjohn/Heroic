'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _purchases = require('../../models/store/purchases');

var _purchases2 = _interopRequireDefault(_purchases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

    static async create(data) {
        try {
            return new _purchases2.default(data).save();
        } catch (error) {
            throw new Error(error);
        }
    }

}
exports.default = Interactor;