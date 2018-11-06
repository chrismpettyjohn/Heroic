'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = require('../base');

var _base2 = _interopRequireDefault(_base);

var _objectionPasswordBcryptjs = require('objection-password-bcryptjs');

var _objectionPasswordBcryptjs2 = _interopRequireDefault(_objectionPasswordBcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Prepare
// Dependencies
const password = (0, _objectionPasswordBcryptjs2.default)();

// Code
class Model extends password(_base2.default) {
  static get tableName() {
    return 'users';
  }

  static get visible() {
    return [
    // Columns
    'id', 'username', 'account_created', 'last_login', 'last_online', 'motto', 'look', 'gender', 'rank', 'credits', 'pixels', 'points', 'online', 'home_room',
    // Relationships
    'badges', 'bans', 'camera', 'friends', 'info', 'rooms', 'permission', 'posts', 'comments'];
  }

  static get relationMappings() {
    // Dependencies
    const Badges = require('./users_badges').default;
    const Bans = require('./bans').default;
    const Camera = require('./camera').default;
    const Friends = require('./friend').default;
    const Info = require('./users_settings').default;
    const Rooms = require('./room').default;
    const Permission = require('./permission').default;
    const Timeline = {
      Posts: require('./post').default,
      Comments: require('./comment').default
      // Relations
    };return {
      // Bans (bans)
      bans: {
        relation: _base2.default.HasOneRelation,
        modelClass: Bans,
        join: {
          from: 'users.id',
          to: 'bans.user_id'
        }
      },
      // Badges (users_badges)
      badges: {
        relation: _base2.default.HasManyRelation,
        modelClass: Badges,
        join: {
          from: 'users.id',
          to: 'users_badges.user_id'
        }
      },
      // Camera (camera_web)
      camera: {
        relation: _base2.default.HasManyRelation,
        modelClass: Camera,
        join: {
          from: 'users.id',
          to: 'camera_web.user_id'
        }
      },
      // Friends (messenger_friendships)
      friends: {
        relation: _base2.default.HasManyRelation,
        modelClass: Friends,
        join: {
          from: 'users.id',
          to: 'messenger_friendships.user_one_id'
        }
      },
      // Info (user_settings)
      info: {
        relation: _base2.default.HasOneRelation,
        modelClass: Info,
        join: {
          from: 'users.id',
          to: 'users_settings.user_id'
        }
      },
      // Permission(permissions)
      permission: {
        relation: _base2.default.HasOneRelation,
        modelClass: Permission,
        join: {
          from: 'users.rank',
          to: 'permissions.id'
        }
      },
      // Rooms (rooms)
      rooms: {
        relation: _base2.default.HasManyRelation,
        modelClass: Rooms,
        join: {
          from: 'users.id',
          to: 'rooms.owner_id'
        }
      },
      // Posts (heroic_posts)
      posts: {
        relation: _base2.default.HasManyRelation,
        modelClass: Timeline.Posts,
        join: {
          from: 'users.id',
          to: 'heroic_posts.user_id'
        }
      },
      // Comments (heroic_comments)
      comments: {
        relation: _base2.default.HasManyRelation,
        modelClass: Timeline.Comments,
        join: {
          from: 'users.id',
          to: 'heroic_comments.user_id'
        }
      }
    };
  }
}
exports.default = Model;