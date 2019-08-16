import { omit } from 'lodash';
import { UserEntity } from '../entity';
import { Repository, Like } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) { }

  async findAll(): Promise<UserEntity[]> {
    const result: UserEntity[] = await this.repository.find({
      cache: true
    })
    return result.map(user => omit(user, 'password'))
  }

  async findByID(id: number): Promise<UserEntity> {
    const result: UserEntity = await this.repository.findOne(id)
    return omit(result, 'password')
  }

  async findByUsername(username: string): Promise<UserEntity> {
    const result: UserEntity = await this.repository.findOne({
      where: {
        username
      }
    })
    return omit(result, 'password')
  }

  findByUsernameWithPassword(username: string): Promise<UserEntity> {
    return this.repository.findOne({
      where: {
        username
      }
    })
  }

  async searchByUsername(username: string): Promise<UserEntity[]> {
    const result: UserEntity[] = await this.repository.find({
      where: {
        username: Like(`%${username}%`)
      }
    })
    return result.map(user => omit(user, 'password'))
  }

}
