import {Module} from '@nestjs/common';
import {UserModule} from './user/module';
import {AuthModule} from './auth/module';
import {ArticleModule} from './article/module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SecurityModule} from './security/module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    UserModule,
    ArticleModule,
    SecurityModule,
  ],
})

export class AppModule {
}
