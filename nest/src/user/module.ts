import {UserEntity} from './entity';
import {BanEntity} from './entity/ban';
import {UserService} from './service';
import {Module} from '@nestjs/common';
import {BanService} from './service/ban';
import {CoreModule} from '../core/module';
import {UserController} from './controller';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  exports: [
    BanService,
    UserService,
  ],
  imports: [
    CoreModule,
    TypeOrmModule.forFeature([
      UserEntity,
      BanEntity,
    ]),
  ],
  providers: [
    BanService,
    UserService,
  ],
})

export class UserModule {
}
