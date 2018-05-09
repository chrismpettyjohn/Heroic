'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _error = require('../../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _products = require('../../../sql/interactors/store/products');

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

    static async create(request, reply) {
        try {
            const data = {
                title: request.body.title,
                content: request.body.content,
                price: request.body.price,
                rank_id: request.body.rank_id,
                boost_credits: request.body.boost_credits,
                boost_pixels: request.body.boost_pixels,
                boost_points: request.body.boost_points
            };
            await _products2.default.create(data);
            reply.code(200).send('Your changes have been saved');
        } catch (error) {
            new _error2.default(error, request, reply);
        }
    }

    static async read(request, reply) {
        try {
            let products = await _products2.default.read(request.params.id);
            reply.code(200).send(products);
        } catch (error) {
            new _error2.default(error, request, reply);
        }
    }

    static async update(request, reply) {
        try {
            const data = {
                id: request.params.id,
                title: request.body.title,
                content: request.body.content,
                price: request.body.price,
                rank_id: request.body.rank_id,
                boost_credits: request.body.boost_credits,
                boost_pixels: request.body.boost_pixels,
                boost_points: request.body.boost_points
            };
            await _products2.default.update(data);
            reply.code(200).send('Your changes have been saved');
        } catch (error) {
            new _error2.default(error, request, reply);
        }
    }

    static async delete(request, reply) {
        try {
            await _products2.default.delete(request.params.id);
            reply.code(200).send('Package has been deleted');
        } catch (error) {
            new _error2.default(error, request, reply);
        }
    }

}
exports.default = Controller;