import * as Faker from 'faker';
import * as Moment from 'moment';
import {UserEntity} from '../entity';
import {getRepository, Repository} from 'typeorm';

export const UserFactory = async (): Promise<UserEntity> => {
  const userRepository: Repository<UserEntity> = getRepository(UserEntity);
  const user: UserEntity = await userRepository.save({
    username: Faker.internet.userName(),
    mail: Faker.internet.email(),
    password: Faker.random.word(),
    account_created: Moment().unix(),
  });
  return user;
};
