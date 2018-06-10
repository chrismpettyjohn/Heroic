import Path from 'path'
import Model from '~/app/sql/model'
export default class Section extends Model {
  static tableName = 'heroic_forum_posts';
  static visible = [
    'id',
    'section_id',
    'topic_id',
    'user_id',
    'title',
    'content',
    'type',
    'created_at',
    'author',
    'section',
    'replies'
  ];

  static relationMappings = {
    author: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${Path.resolve(__dirname, '..', '..', 'user')}/user`,
      join: {
        from: 'heroic_forum_posts.user_id',
        to: 'users.id'
      }
    },
    section: {
      relation: Model.BelongsToOneRelation,
      modelClass: `${__dirname}/section`,
      join: {
        from: 'heroic_forum_posts.section_id',
        to: 'heroic_forum_sections.id'
      }
    },
    replies: {
      relation: Model.HasManyRelation,
      modelClass: `${__dirname}/post`,
      join: {
        from: 'heroic_forum_posts.id',
        to: 'heroic_forum_posts.topic_id'
      }
    }
  }
}
