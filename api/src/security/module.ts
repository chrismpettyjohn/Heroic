import {CoreModule} from '../core/module';
import {UserModule} from '../user/module';
import {SecurityService} from './service';
import {SecurityMiddleware} from './middleware';
import {forwardRef, Module, MiddlewareConsumer} from '@nestjs/common';

@Module({
  imports: [
    CoreModule,
    forwardRef(() => UserModule),
  ],
  providers: [
    SecurityService,
    SecurityMiddleware,
  ],
  exports: [
    SecurityService,
    SecurityMiddleware,
  ],
})

export class SecurityModule {
  
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(SecurityMiddleware)
      .forRoutes('*');
  }
  
}
