import { UserEntity} from './entity';
import { Module } from '@nestjs/common';
import { UserService } from './service';
import { UserController} from './controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
})

export class UserModule {}
