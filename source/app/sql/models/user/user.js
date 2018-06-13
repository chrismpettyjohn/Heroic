// Dependencies
import Model from '~/app/sql/model'
import Password from 'objection-password-bcryptjs'
// Prepare
const password = Password()
export default class User extends password(Model) {
  static tableName = 'users';
  static visible = [
    'id',
    'username',
    'rank',
    'online',
    'home_room',
    'look',
    'credits',
    'pixels',
    'points',
    'badges',
    'rooms',
    'guilds',
    'friends',
    'guestbook'
  ];

  // Relationships
  static relationMappings = {
    // Sessions
    sessions: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/session`,
      join: {
        from: 'users.id',
        to: 'user_sessions.user_id'
      }
    },
    // Badges
    badges: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/badge`,
      join: {
        from: 'users.id',
        to: 'users_badges.user_id'
      }
    },
    // Rooms
    rooms: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/room`,
      join: {
        from: 'users.id',
        to: 'rooms.owner_id'
      }
    },
    // Guilds
    guilds: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/guilds/member`,
      join: {
        from: 'users.id',
        to: 'guilds_members.user_id'
      }
    },
    // Friends
    friends: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/friendship`,
      join: {
        from: 'users.id',
        to: 'messenger_friendships.user_one_id'
      }
    },
    // Guestbook
    guestbook: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/guestbook`,
      join: {
        from: 'users.id',
        to: 'user_guestbook.profile_id'
      }
    }
  };

  // Structure
  static jsonSchema = {
    type: 'object',
    required: [
      'username', 'password', 'mail', 'ip_current', 'ip_register'
    ],

    properties: {
      id: {
        type: 'integer'
      },
      username: {
        type: 'string',
        minLength: 1,
        maxLength: 10
      },
      mail: {
        type: 'email'
      },
      ip_current: {
        type: 'ipv4'
      },
      ip_register: {
        type: 'ipv4'
      },
      auth_ticket: {
        type: 'string',
        minLength: 25,
        maxLength: 255
      },
      motto: {
        type: 'string',
        minLength: 1,
        maxLength: 127
      },
      credits: {
        type: 'integer',
        minlength: 1,
        maxLength: 11
      },
      pixels: {
        type: 'integer',
        minlength: 1,
        maxLength: 11
      },
      points: {
        type: 'integer',
        minlength: 1,
        maxLength: 11
      }
    }
  }
}
