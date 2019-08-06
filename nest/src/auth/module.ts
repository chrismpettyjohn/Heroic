import { Module } from '@nestjs/common';
import { AuthService } from './service';
import { LocalStrategy} from './strategy';
import { CoreModule} from '../core/module';
import { UserModule} from '../user/module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [CoreModule, UserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})

export class AuthModule {}
