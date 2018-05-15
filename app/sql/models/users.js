import {Model} from 'objection'
export default class Users extends Model {

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
    private: []
  }

}
