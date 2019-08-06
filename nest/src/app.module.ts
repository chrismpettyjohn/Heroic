import { Module } from '@nestjs/common';
import {UserModule} from './user/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'heroic',
      entities: [`${__dirname}/**/entity.ts`],
      synchronize: false,
    }),
    UserModule,
    AuthModule,
  ],
})

export class AppModule {}
