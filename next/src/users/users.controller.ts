import { UsersService} from './users.service';
import { Controller, Get } from '@nestjs/common';
import { User } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
