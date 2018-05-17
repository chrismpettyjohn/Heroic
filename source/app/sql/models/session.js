import Model from '~/app/sql/model'
export default class Session extends Model {
  static tableName = 'user_sessions';
  static identifiers = ['id', 'token'];
  static visible = [
    'id',
    'user_id',
    'token',
    'type',
    'created_at',
    'ended_at'
  ];

  // Relationships

  // Structure
  static jsonSchema = {
    type: 'object',
    required: [
      'user_id', 'token'
    ],

    properties: {
      id: {
        type: 'integer'
      },
      user_id: {
        type: 'integer'
      },
      type: {
        type: 'string',
        enum: ['allowed', 'blocked']
      },
      created_at: {
        type: 'date-tim'
      }
    }
  };

}
