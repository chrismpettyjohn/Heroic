'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _error = require('../../../lib/error');

var _error2 = _interopRequireDefault(_error);

var _users = require('../../../sql/interactors/user/users');

var _users2 = _interopRequireDefault(_users);

var _purchases = require('../../../sql/interactors/store/purchases');

var _purchases2 = _interopRequireDefault(_purchases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {

    static async create(request, reply) {
        try {
            // Purchase Record 
            await _purchases2.default.create({
                user_id: request.body.user.id,
                product_id: request.body.product.id,
                payment_id: request.body.purchase.id,
                status: 'accepted',
                verified_at: new Date()
            });
            // Update Account  
            await _users2.default.subscription({
                id: request.body.user.id,
                rank: request.body.product.rank_id,
                credits: request.body.product.boost_credits,
                pixels: request.body.product.boost_pixels,
                points: request.body.product.boost_points
            });
            reply.code(200).send('Your membership has been updated');
        } catch (error) {
            new _error2.default(error, request, reply);
        }
    }

}
exports.default = Controller;