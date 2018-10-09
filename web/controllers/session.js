'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jwt = require('../../lib/jwt');

var _jwt2 = _interopRequireDefault(_jwt);

var _post = require('../../sql/models/post');

var _post2 = _interopRequireDefault(_post);

var _friend = require('../../sql/models/friend');

var _friend2 = _interopRequireDefault(_friend);

var _user = require('../../sql/interactors/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controller {
  static async read(request, reply) {
    try {
      let user = await _user2.default.read(request.session.username);
      reply.code(201).send(user);
    } catch (e) {
      reply.code(400).send(e);
    }
  }
  static async create(request, reply) {
    try {
      // Try Login
      let user = await _user2.default.login(request.body.username, request.body.password);
      // Sign Session
      user = _jwt2.default.sign(user);
      // Return
      reply.code(201).send(user);
    } catch (e) {
      reply.code(400).send(e);
    }
  }

  static async client(request, reply) {
    try {
      let sso = await _user2.default.client(request.session.id);
      reply.code(201).send(sso);
    } catch (e) {
      reply.code(400).send(e);
    }
  }

  static async timeline(request, reply) {
    try {
      let friends = [];
      let results = await _friend2.default.query().where('user_one_id', request.session.id);
      results.forEach(friend => {
        friends.push(friend.user_two_id);
      });
      let posts = await _post2.default.query().where('user_id', 'in', friends).eager(`[${request.params.relations}]`).orderBy('id', 'DESC').page(request.params.page, 10);
      console.log(posts);
      reply.code(200).send(posts);
    } catch (e) {
      reply.code(500).send(e);
    }
  }
}
exports.default = Controller;