import Session from './session'
import Model from '~/app/sql/model'
export default class User extends Model {
  static tableName = 'users';
  static fields = ['username', 'mail'];
  static identifiers = ['id'];
  static visible = [
    'id',
    'username',
    'rank',
    'online',
    'home_room',
    'look',
    'credits',
    'pixels',
    'points'
  ];

  // Relationships
  static relationMappings = {
    sessions: {
      relation: Model.HasManyRelation,
      modelClass: Session,
      join: {
        from: 'users.id',
        to: 'user_sessions.user_id'
      }
    }
  }

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
      password: {
        type: 'string',
        minLength: 60,
        maxLength: 60
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
