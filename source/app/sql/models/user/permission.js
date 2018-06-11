import Model from '~/app/sql/model'
export default class Permission extends Model {
  static tableName = 'permissions';
  static identifiers = ['id'];
  static visible = ['id', 'rank_name', 'level', 'users'];

  // Relationships
  static relationMappings = {
    users: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/user`,
      join: {
        from: 'permissions.id',
        to: 'users.rank'
      }
    }
  };

  // Filters
  static namedFilters = {
    staff: (builder) => {
      builder.where('level', '>', 3)
    }
  };

  // Structure
  static jsonSchema = {
    type: 'object',
    required: [
      'rank_name', 'prefix', 'prefix_color'
    ],

    properties: {
      id: {
        type: 'integer'
      },
      level: {
        type: 'integer'
      },
      rank_name: {
        type: 'string',
        minLength: 3,
        maxLength: 10
      },
      prefix: {
        type: 'string',
        minLength: 0,
        maxLength: 5
      }
    }
  };
}
