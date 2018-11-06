'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../../helpers/user');

var _user2 = _interopRequireDefault(_user);

var _user3 = require('../../sql/interactors/user');

var _user4 = _interopRequireDefault(_user3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  // Create user through registration
  static async create(request, reply) {
    try {
      // Add IP to User object
      request.body.user.ip = request.raw.clientIp;
      // Check for data errors
      await _user2.default.check(request.body.user);
      // Check for duplicates
      await _user2.default.duplicates(request.body.user);
      // Database transaction
      await _user4.default.create(request.body.user);
      // Return
      reply.code(200).send();
    } catch (e) {
      reply.code(400).send(e);
    }
  }

  // Find user by username or email
  static async read(request, reply) {
    try {
      let user = await _user4.default.read(request.params.user, request.params.relations);
      reply.code(200).send(user);
    } catch (e) {
      reply.code(404).send();
    }
  }

  // Update user by account settings
  static async update(request, reply) {
    try {
      let user = {};
      let data = request.body;
      user.mail = data.mail;
      if (data.password_new) {
        if (data.password.new === data.password_repeat) {
          await _user4.default.login(request.session.username, data.password_current);
          user.password = data.password_new;
        } else {
          throw new Error(`New password doesn't match`);
        }
      }
      await _user4.default.update(user);
      reply.code(200).send();
    } catch (e) {
      reply.code(400).send(e);
    }
  }

  // Fetch online users
  static async online(request, reply) {
    try {
      let users = await _user4.default.online();
      reply.code(200).send(users);
    } catch (e) {
      reply.code(400).send();
    }
  }

  // Fetch top users
  static async top(request, reply) {
    try {
      let users = await _user4.default.top();
      reply.code(200).send(users);
    } catch (e) {
      reply.code(400).send();
    }
  }

  // ADMIN FEATURES

  // Update user
  static async authUpdate(request, reply) {
    try {
      await _user4.default.update(request.body.user);
      reply.code(200).send();
    } catch (e) {
      reply.code(500).send(e);
    }
  }

  static async authDelete(request, reply) {
    try {
      await _user4.default.delete(request.params.id);
      reply.code(200).send();
    } catch (e) {
      reply.code(500).send(e);
    }
  }
}
exports.default = Controller;