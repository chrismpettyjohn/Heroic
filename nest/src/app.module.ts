import { Module } from '@nestjs/common';
import { UserModule } from './user/module';
import { AuthModule } from './auth/module';
import { ArticleModule} from './article/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecurityModule} from './security/module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASS || '',
      database: process.env.DATABASE_NAME || '',
      entities: [
        `${__dirname}/**/entity.ts`,
        `${__dirname}/**/entity/*.ts`
      ],
      migrations: [
        `${__dirname}/**/migration.ts`,
        `${__dirname}/**/migration/*.ts`
      ],
      synchronize: false,
    }),
    AuthModule,
    UserModule,
    ArticleModule,
    SecurityModule
  ],
})

export class AppModule {}
