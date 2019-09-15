import {UserEntity} from './entity';
import {UserService} from './service';
import {AuthGuard} from '@nestjs/passport';
import {Controller, Get, Post, UseGuards, Query, Param} from '@nestjs/common';

@Controller('users')
export class UserController {
  
  constructor(private readonly service: UserService) {
  }
  
  @Post('')
  async createOne(username: string, email: string, password: string): Promise<UserEntity> {
    return this.service.createOne(username, email, password);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  async findAll(): Promise<UserEntity[]> {
    return this.service.findAll();
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserEntity> {
    return this.service.findByID(id);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('username/:username')
  async findOneByUsername(@Param('username') username: string): Promise<UserEntity> {
    return this.service.findByUsername(username);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('search')
  async search(@Query() query): Promise<UserEntity[]> {
    return this.service.searchByUsername(query.username);
  }
  
}
