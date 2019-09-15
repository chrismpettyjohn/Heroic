import * as Moment from 'moment';
import {UserEntity} from './entity';

export const UserExample: UserEntity = {
  id: null,
  username: 'Chris',
  mail: 'chris@gmail.com',
  password: 'johndoe',
  account_created: Moment().unix(),
};
