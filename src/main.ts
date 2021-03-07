import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RABBIT_QUEUE, RABBIT_URL } from './utils/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [RABBIT_URL],
        queue: RABBIT_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen(() => console.log('Microservice is listening'));
}

bootstrap();
