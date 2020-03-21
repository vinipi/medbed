import './config/aliases';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger: Logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder()
    .setTitle('MedBed')
    .setDescription('Gestion des lits')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  await app.listen(10080);
}
bootstrap();
