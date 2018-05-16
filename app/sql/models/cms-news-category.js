import Articles from './cms-news-article'
import Model from '~/app/sql/model'
export default class Categories extends Model {
  // Settings
  static tableName = 'cms_news_categories';
  static identifiers = ['id'];
  static visible = ['id', 'title', 'timestamp', 'articles'];

  // Relationships
  static relationMappings = {
    articles: {
      relation: Model.HasManyRelation,
      modelClass: Articles,
      join: {
        from: 'cms_news_categories.id',
        to: 'cms_news_articles.category_id'
      }
    }
  }

  // Structure
  static jsonSchema = {
    type: 'object',
    required: [],

    properties: {
      id: {
        type: 'integer'
      },
      title: {
        type: 'string',
        minLength: 1,
        maxLength: 10
      }
    }
  };

}
