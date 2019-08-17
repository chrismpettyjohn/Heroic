import * as RequestIP from 'request-ip';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false })
  );
  app.enableCors();
  app.use(RequestIP.mw())
  await app.listen(8080, '0.0.0.0');
}

bootstrap();
