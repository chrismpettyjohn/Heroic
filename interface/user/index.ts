import {UserEntity} from '../../nest/src/user/entity';

export interface IUser extends Omit<UserEntity, 'password'> {

}
