'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rooms = require('../../models/user/rooms');

var _rooms2 = _interopRequireDefault(_rooms);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

    static async read(id) {
        try {
            if (id) {
                let room = await _rooms2.default.where('id', id).fetch({ columns: ['id', 'name', 'description', 'owner_id'], withRelated: ['owner'] });
                if (room) {
                    return room;
                } else {
                    throw new Error('RETURN: Room does not exist');
                }
            } else {
                return _rooms2.default.query(qb => {
                    qb.select('id', 'name', 'description', 'owner_id');qb.orderByRaw('RAND()');qb.limit(10);
                }).fetchAll({ withRelated: ['owner'] });
            }
        } catch (error) {
            throw new Error(error);
        }
    }

}
exports.default = Interactor;