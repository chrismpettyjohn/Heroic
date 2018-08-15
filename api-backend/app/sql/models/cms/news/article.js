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
    'views',
    'author',
    'category',
    'created_at',
    'updated_at'
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
    ]
  };
}
