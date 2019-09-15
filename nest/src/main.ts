import 'dotenv/config';
import * as RequestIP from 'request-ip';
import {AppModule} from './app.module';
import {NestFactory} from '@nestjs/core';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';

const httpPort = process.env.HTTP_PORT || 80;
const httpListen = process.env.HTTP_LISTEN || '0.0.0.0';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({logger: false}),
  );
  app.setGlobalPrefix('api');
  app.enableCors();
  app.use(RequestIP.mw());
  await app.listen(httpPort, httpListen);
}

bootstrap();
