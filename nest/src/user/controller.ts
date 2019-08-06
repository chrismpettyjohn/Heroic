import { UserEntity } from './entity';
import { UserService } from './service';
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {

  constructor(private readonly service: UserService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return this.service.findAll();
  }

  @Get(':id')
  async findOne(id: number): Promise<UserEntity> {
    return this.service.findOne(id);
  }

}
