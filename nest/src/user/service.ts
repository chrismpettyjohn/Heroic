import {Repository} from 'typeorm';
import {UserEntity} from './entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {}

  findAll(): Promise<UserEntity[]> {
    return this.repository.find();
  }

  findOne(username: string, args?): Promise<UserEntity> {
    return this.repository.findOne({
      where: {
        username,
      },
      ...args
    });
  }

}
