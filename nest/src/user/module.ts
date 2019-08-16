import { UserEntity} from './entity';
import { UserService } from './service';
import { Module } from '@nestjs/common';
import { UserController} from './controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UserController],
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
})

export class UserModule {}
