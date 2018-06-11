import Model from '~/app/sql/model'
export default class Section extends Model {
  static tableName = 'heroic_forum_sections';
  static visible = [
    'id',
    'title',
    'description',
    'image',
    'created_at',
    'posts'
  ];

  static relationMappings = {
    posts: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/post`,
      join: {
        from: 'heroic_forum_sections.id',
        to: 'heroic_forum_posts.section_id'
      }
    }
  }
}
