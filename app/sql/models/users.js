// Import
import {Model, compose} from 'objection'
import Unique from 'objection-unique'
import Password from 'objection-password-bcryptjs'
// Configure Plugins

const unique = Unique({
  fields: [
    'username', 'mail'
  ],
  identifiers: ['id']
})

const password = Password()

const plugins = compose([unique, password])

// Model Logic
export default class Users extends plugins(Model) {

  static tableName = 'users';

  static columns = {
    public: [
      'id',
      'username',
      'rank',
      'online',
      'home_room',
      'look',
      'credits',
      'pixels',
      'points'
    ],
    private: [
      'id',
      'username',
      'password',
      'mail',
      'rank',
      'online',
      'home_room',
      'look',
      'credits',
      'pixels',
      'points',
      'ip_register',
      'ip_current'
    ]
  }

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
