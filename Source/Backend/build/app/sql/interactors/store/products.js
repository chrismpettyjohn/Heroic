'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _products = require('../../models/store/products');

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

    static async create(data) {
        try {
            return await new _products2.default(data).save();
        } catch (error) {
            throw new Error(error);
        }
    }

    static async read(id) {
        try {
            if (id) {
                await Interactor.exists(id);

                return await _products2.default.where('id', id).fetch({
                    columns: ['id', 'title', 'content', 'price', 'rank_id', 'boost_credits', 'boost_pixels', 'boost_points'],
                    withRelated: ['rank']
                });
            } else {
                return _products2.default.query('orderBy', 'price', 'ASC').fetchAll({
                    columns: ['id', 'title', 'content', 'price', 'rank_id', 'boost_credits', 'boost_pixels', 'boost_points'],
                    withRelated: ['rank']
                });
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    static async update(data) {
        try {
            await Interactor.exists(data.id);
            await new _products2.default(data).save();
            return true;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async delete(id) {
        try {
            await Interactor.exists(id);
            await _products2.default.where('id', id).destroy();
            return true;
        } catch (error) {
            throw new Error(error);
        }
    }

    // Other 
    static async exists(id) {
        try {
            if (id) {
                const item = await _products2.default.where('id', id).fetch({
                    columns: ['id']
                });
                if (item) {
                    return true;
                } else {
                    throw new Error('RETURN: Item does not exist');
                }
            } else {
                throw new Error('RETURN: Item ID has not been defined');
            }
        } catch (error) {
            throw new Error(error);
        }
    }

}
exports.default = Interactor;