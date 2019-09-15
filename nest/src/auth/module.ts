import {JwtModule} from '@nestjs/jwt';
import {AuthService} from './service';
import {AuthConstants} from './constants';
import {CoreModule} from '../core/module';
import {UserModule} from '../user/module';
import {JwtStrategy} from './strategy/jwt';
import {AuthController} from './controller';
import {LocalStrategy} from './strategy/local';
import {PassportModule} from '@nestjs/passport';
import {forwardRef, Module} from '@nestjs/common';

@Module({
  controllers: [AuthController],
  imports: [
    CoreModule,
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: AuthConstants.secret,
      signOptions: {
        expiresIn: AuthConstants.expiresIn,
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [],
})

export class AuthModule {
  constructor() {
    PassportModule.register({
      session: true,
    });
  }
}
