import Path from 'path'
import Model from '~/app/sql/model'
export default class Articles extends Model {
  // Settings
  static tableName = 'heroic_news_articles';
  static identifiers = ['id'];
  static visible = [
    'id',
    'user_id',
    'category_id',
    'title',
    'description',
    'content',
    'image',
    'timestamp',
    'author',
    'category'
  ];

  // Relationships
  static relationMappings = {
    author: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${Path.resolve(__dirname, '..', '..', 'user')}/user`,
      join: {
        from: 'heroic_news_articles.user_id',
        to: 'users.id'
      }
    },
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/category`,
      join: {
        from: 'heroic_news_articles.category_id',
        to: 'heroic_news_categories.id'
      }
    }
  };

  // Structure
  static jsonSchema = {
    type: 'object',
    required: [
      'user_id',
      'category_id',
      'title',
      'description',
      'content',
      'image'
    ],

    properties: {
      id: {
        type: 'integer'
      },
      user_id: {
        type: 'integer',
        minLength: 1,
        maxLength: 10
      },
      category_id: {
        type: 'integer',
        minLength: 1,
        maxLength: 10
      },
      title: {
        type: 'string',
        minLength: 1,
        maxLength: 15
      },
      description: {
        type: 'string',
        minLength: 1,
        maxLength: 115
      },
      content: {
        type: 'string',
        minLength: 50
      },
      image: {
        type: 'string',
        minLength: 1,
        maxLength: 30
      }
    }
  };
}
