import { Injectable } from '@nestjs/common';
import { UserService} from '../user/service';

@Injectable()
export class SecurityService {

  constructor(private readonly userService: UserService) { }

  async findIPBans (ip: string): Promise<any> {
    return []
  }

}
