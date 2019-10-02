import {AuthService} from './service';
import {AuthGuard} from '@nestjs/passport';
import {Controller, Request, Get, Post, UseGuards} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  
  constructor(private readonly service: AuthService) { }
  
  @UseGuards(AuthGuard('credentials'))
  @Post('')
  async login(@Request() req) {
    return this.service.login(req.user);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('')
  getUser(@Request() req) {
    return req.user;
  }
  
}
