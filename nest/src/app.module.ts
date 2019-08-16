import { Module } from '@nestjs/common';
import { UserModule } from './user/module';
import { AuthModule } from './auth/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecurityModule} from './security/module';

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
    AuthModule,
    UserModule,
    SecurityModule
  ],
})

export class AppModule {}