import * as Faker from 'faker';
import * as Moment from 'moment';
import {UserFactory} from './index';
import {UserEntity} from '../entity';
import {BanEntity, BanType} from '../entity/ban';
import {getRepository, Repository} from 'typeorm';

export const BanFactory = async (): Promise<BanEntity> => {
  const bannedUser: UserEntity = await UserFactory();
  const staffUser: UserEntity = await UserFactory();
  const banRepository: Repository<BanEntity> = getRepository(BanEntity);
  const ban: BanEntity = await banRepository.save({
    user_id: bannedUser.id,
    ip: Faker.internet.ip(),
    machine_id: Faker.random.uuid(),
    user_staff_id: staffUser.id,
    timestamp: Moment().unix(),
    ban_expire: Moment().add(1, 'day').unix(),
    ban_reason: Faker.random.words(),
    type: BanType.IP,
    cfh_topic: 0,
  });
  return ban;
};
