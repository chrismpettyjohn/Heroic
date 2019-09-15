import {omit} from 'lodash';
import {JwtService} from '@nestjs/jwt';
import {UserEntity} from '../user/entity';
import {Injectable} from '@nestjs/common';
import {UserService} from '../user/service';
import {CoreService} from '../core/service';

@Injectable()
export class AuthService {
  
  constructor(
    private readonly coreService: CoreService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }
  
  async validateWithPassword(username: string, password: string): Promise<any> {
    const user: UserEntity = await this.userService.findByUsernameWithPassword(username);
    if (user && this.coreService.checkPassword(password, user.password)) {
      return omit(user, 'password');
    }
    return null;
  }
  
  async login(user: any) {
    const payload = {username: user.username, sub: user.id};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  
}
