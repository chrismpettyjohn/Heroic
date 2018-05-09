'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _randomstring = require('randomstring');

var _randomstring2 = _interopRequireDefault(_randomstring);

var _users = require('../../models/user/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Interactor {

  // CRUD
  static async create(data) {
    try {
      // Validate
      await Interactor.validate(data.username, 'username', true);
      await Interactor.validate(data.mail, 'email', true);
      await Interactor.validate(data.password, 'password');
      data.password = _bcryptjs2.default.hashSync(data.password, 10);
      await new _users2.default(data).save();
      let user = await Interactor.read(data.username, 'username');
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async read(data, type, self) {
    if (self) {
      const user = await _users2.default.where(type, data).fetch({
        columns: ['id', 'username', 'mail', 'look', 'rank', 'credits', 'pixels', 'points', 'online'],
        withRelated: ['bans', 'rank', 'purchases', 'purchases.product', 'purchases.product.rank']
      });
      return user.toJSON();
    } else {
      const user = await _users2.default.where(type, data).fetch({
        columns: ['id', 'username', 'mail', 'look', 'rank', 'credits', 'pixels', 'points', 'online']
      });
      return user.toJSON();
    }
  }

  static update(data) {
    return new _users2.default(data).save();
  }

  // Other
  static async validate(data, type, query) {
    if (data != undefined) {
      let regex = '';

      switch (type) {

        case 'username':
          regex = new RegExp('^(?=.{1,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$');
          if (regex.test(data)) {
            if (query) {
              let users = await _users2.default.where('username', data).fetchAll({
                columns: ['id']
              });
              if (users.length == 0) {
                return true;
              } else {
                throw new Error('RETURN: Username is already taken');
              }
            } else {
              return true;
            }
          } else {
            throw new Error('RETURN: Username is not valid');
          }
          break;

        case 'email':
          regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
          if (regex.test(data)) {
            if (query) {
              let users = await _users2.default.where('mail', data).fetchAll({
                columns: ['id']
              });
              if (users.length == 0) {
                return true;
              } else {
                throw new Error('RETURN: Email is already taken');
              }
            } else {
              return true;
            }
          } else {
            throw new Error('RETURN: Email is not valid');
          }
          break;

        case 'password':
          regex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
          if (regex.test(data)) {
            return true;
          } else {
            throw new Error('RETURN: Password is not strong enough');
          }
          break;

      }
    } else {
      throw new Error(`RETURN: ${type} is empty`);
    }
  }

  static async login(username, password) {
    if (username != undefined && password != undefined) {
      try {
        let user = await Interactor.validate(username, 'username', false);
        user = await _users2.default.where('username', username).fetch({
          columns: ['id', 'password']
        });
        if (user) {
          if (_bcryptjs2.default.compareSync(password, user.toJSON().password)) {
            return user.toJSON().id;
          } else {
            throw new Error(`RETURN: That's not the right password`);
          }
        } else {
          throw new Error('RETURN: That user does not exist');
        }
      } catch (error) {
        throw new Error(error);
      }
    } else {
      throw new Error('RETURN: You need to fill in both username and password.');
    }
  }

  static async fetch(data, type) {
    try {
      return await _users2.default.where(data, type).fetch({
        columns: ['id', 'username', 'rank', 'look', 'credits', 'pixels']
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  static async count(data, type) {
    try {
      return await _users2.default.where(data, type).count();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async exists(data, type) {
    try {
      let user = await _users2.default.where(type, data).fetch({
        columns: ['id', type]
      });
      if (user) {
        return user.toJSON().id;
      } else {
        throw new Error('RETURN: User does not exist');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  static async subscription(data) {
    try {
      // Check For Existence 
      await Interactor.exists(data.id, 'id');
      // Fetch user
      let user = await Interactor.read(data.id, 'id', true);
      // Format 
      user = user.toJSON();
      // Check Rank 
      if (user.rank.id > data.rank) {
        data.rank = user.rank.id;
      }
      // Save 
      await Interactor.update({
        id: data.id,
        rank: data.rank,
        credits: user.credits + data.credits,
        pixels: user.credits + data.pixels,
        points: user.points + data.points
      });
      return 'Account has been updated';
    } catch (error) {
      throw new Error(error);
    }
  }

  static async client(id) {
    try {

      const generated = `heroic_two_${_randomstring2.default.generate(7)}`;

      await Interactor.exists(id, 'id');

      await _users2.default.where('id', id).save({
        id: id,
        auth_ticket: generated
      }, {
        method: 'update'
      });

      return generated;
    } catch (error) {
      throw new Error(error);
    }
  }

}
exports.default = Interactor;