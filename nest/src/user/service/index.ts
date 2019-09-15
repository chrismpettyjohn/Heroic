import {omit} from 'lodash';
import {getManager} from 'typeorm';
import {UserEntity, UserEntityGeneric} from '../entity';
import {validate} from 'class-validator';
import {Repository, Like} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {NotFoundException, BadRequestException} from '@nestjs/common';

@Injectable()
export class UserService {
  
  constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) { }
  
  async createOne(username: string, email: string, password: string): Promise<UserEntity> {
    
    const user = new UserEntity();
    user.username = username;
    user.mail = email;
    user.password = password;
    
    const errors = await validate(user);
    
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    } else {
      await getManager().save(user);
      return user;
    }
    
  }
  
  async findAll(): Promise<UserEntityGeneric[]> {
    const result: UserEntity[] = await this.repository.find({
      cache: true,
    });
    if (result.length === 0) {
      throw new NotFoundException('User not found');
    } else {
      return result.map(user => omit(user, 'password'));
    }
  }
  
  async findByID(id: number): Promise<UserEntityGeneric> {
    try {
      const result: UserEntity = await this.repository.findOneOrFail(id);
      return omit(result, 'password');
    } catch (e) {
      throw new NotFoundException('User not found');
    }
  }
  
  async findByUsername(username: string): Promise<UserEntityGeneric> {
    try {
      const result: UserEntity = await this.repository.findOneOrFail({
        where: {
          username,
        },
      });
      return omit(result, 'password');
    } catch (e) {
      throw new NotFoundException('User not found');
    }
  }
  
  async findByUsernameWithPassword(username: string): Promise<UserEntity> {
    try {
      return await this.repository.findOneOrFail({
        where: {
          username,
        },
      });
    } catch (e) {
      throw new NotFoundException('User not found');
    }
  }
  
  async searchByUsername(username: string): Promise<UserEntityGeneric[]> {
    const result: UserEntity[] = await this.repository.find({
      where: {
        username: Like(`%${username}%`),
      },
    });
    
    if (result.length === 0) {
      throw new NotFoundException('User Not Found');
    } else {
      return result.map(user => omit(user, 'password'));
    }
  }
  
}
